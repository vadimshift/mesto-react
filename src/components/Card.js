import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  //Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__delete-button ${
    isOwn ? "element__delete-button_active" : ""
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`;

  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <article className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
      </div>
      <div className="element__title">
        <h2 className="element__text-title">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className={cardLikeButtonClassName}></button>
          <p className="element__like-amount">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName}>
        <img src="images/delete-icon.svg" alt="Кнопка удаления карточки" />
      </button>
    </article>
  );
}

export default Card;
