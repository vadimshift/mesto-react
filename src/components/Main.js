function Main() {
  const handleEditAvatarClick = () => {
    const popup = document.querySelector(".popup_type_change-avatar");
    popup.classList.add("popup_active");
  };

  const handleEditProfileClick = () => {
    const popup = document.querySelector(".popup_type_edit-profile");
    popup.classList.add("popup_active");
  };

  const handleAddPlaceClick = () => {
    const popup = document.querySelector(".popup_type_add-place");
    popup.classList.add("popup_active");
  };

  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            type="button"
            onClick={handleEditAvatarClick}
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
                onClick={handleEditProfileClick}
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button
            type="button"
            onClick={handleAddPlaceClick}
            className="profile__add-button"
          ></button>
        </section>
        <section className="elements"></section>
      </main>
      
      <section className="popup popup_type_image-xl">
        <div className="popup__container popup__container_type_image-xl">
          <img className="popup__image-xl" src="#" alt="Изображение места" />
          <p className="popup__title popup__title_type_image-xl">картинка</p>
          <button
            type="button"
            className="popup__close-button popup__close-button_type_image-xl"
          ></button>
        </div>
      </section>

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
