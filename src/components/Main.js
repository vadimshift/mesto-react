import { useState, useEffect, useContext } from "react";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    const setLikeCard = () => {
      api.setLikeCard(card._id, !isLiked).then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    };

    const setDislikeCard = () => {
      api.delLikeCard(card._id, !isLiked).then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    };

    isLiked ? setDislikeCard() : setLikeCard();
  }

  function handleCardDelete(card) {
    api.delCard(card._id).then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    });
  }

  useEffect(() => {
    api
      .getCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          type="button"
          onClick={props.onEditAvatar}
          className="profile__avatar-edit-button"
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="фотография профиля"
          />
        </button>
        <div className="profile__info-container">
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              type="button"
              onClick={props.onEditProfile}
              className="profile__edit-button"
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          type="button"
          onClick={props.onAddPlace}
          className="profile__add-button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
