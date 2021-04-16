function Main(props) {


  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            type="button"
            onClick={props.onEditAvatar}
            className="profile__avatar-edit-button"
          >
            <img
              className="profile__avatar"
              src="images/avatar-image.jpg"
              alt="фотография профиля"
            />
          </button>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button
                type="button"
                onClick={props.onEditProfile}
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button
            type="button"
            onClick={props.onAddPlace}
            className="profile__add-button"
          ></button>
        </section>
        <section className="elements"></section>
      </main>

      <template className="template-place">
        <article className="element">
          <div className="element__image-container">
            <img className="element__image" src="#" alt="#" />
          </div>
          <div className="element__title">
            <h2 className="element__text-title"></h2>
            <div className="element__like-container">
              <button type="button" className="element__like-button"></button>
              <p className="element__like-amount"></p>
            </div>
          </div>
          <button type="button" className="element__delete-button">
            <img src="images/delete-icon.svg" alt="Кнопка удаления карточки" />
          </button>
        </article>
      </template>
    </>
  );
}

export default Main;
