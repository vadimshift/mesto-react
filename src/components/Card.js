function Card({card, onCardClick}) {
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
          <button type="button" className="element__like-button"></button>
          <p className="element__like-amount">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="element__delete-button">
        <img src="images/delete-icon.svg" alt="Кнопка удаления карточки" />
      </button>
    </article>
  );
}

export default Card;
