import logo  from './images/logo.svg';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <header className="header">
          <img
            className="header__logo"
            src={logo}
            alt="Логотип проекта Место"
          />
        </header>
        <main className="content">
          <section className="profile">
            <button type="button" className="profile__avatar-edit-button">
              <img
                className="profile__avatar"
                src="images/avatar-image.jpg"
                alt="фотография профиля"
              />
            </button>
            <div className="profile__info-container">
              <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button type="button" className="profile__add-button"></button>
          </section>
          <section className="elements"></section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>

        <section className="popup popup_type_edit-profile">
          <div className="popup__container">
            <form
              noValidate
              name="profile"
              className="popup__form popup__form_type_edit-profile"
            >
              <h2 className="popup__title">Редактировать профиль</h2>
              <input
                required
                minLength="2"
                maxLength="40"
                id="enterNameProfile"
                name="name"
                type="text"
                placeholder="Имя"
                className="popup__enter popup__enter_type_name"
              />
              <span className="enterNameProfile-error popup__error-message"></span>
              <input
                required
                minLength="2"
                maxLength="200"
                id="enterAboutProfile"
                name="about"
                type="text"
                placeholder="О себе"
                className="popup__enter popup__enter_type_about"
              />
              <span className="popup__error-message enterAboutProfile-error"></span>
              <button
                disabled
                type="submit"
                className="popup__submit-button popup__submit-button_type_edit-profile"
              >
                Сохранить
              </button>
            </form>
            <button
              type="button"
              className="popup__close-button popup__close-button_type_edit-profile"
            ></button>
          </div>
        </section>

        <section className="popup popup_type_add-place">
          <div className="popup__container">
            <form
              noValidate
              name="place"
              className="popup__form popup__form_type_add-place"
            >
              <h2 className="popup__title">Новое место</h2>
              <input
                required
                minLength="2"
                maxLength="30"
                id="enterNamePlace"
                name="name"
                type="text"
                placeholder="Название"
                className="popup__enter popup__enter_type_name-place"
              />
              <span className="popup__error-message enterNamePlace-error"></span>
              <input
                required
                type="url"
                id="enterLinkPlace"
                name="link"
                placeholder="Ссылка на картинку"
                className="popup__enter popup__enter_type_link-image"
              />
              <span className="popup__error-message enterLinkPlace-error"></span>
              <button
                disabled
                type="submit"
                className="popup__submit-button popup__submit-button_type_add-place"
              >
                Создать
              </button>
            </form>
            <button
              type="button"
              className="popup__close-button popup__close-button_type_add-place"
            ></button>
          </div>
        </section>

        <section className="popup popup_type_change-avatar">
          <div className="popup__container">
            <form
              noValidate
              name="avatar"
              className="popup__form popup__form_type_change-avatar"
            >
              <h2 className="popup__title">Обновить аватар</h2>
              <input
                required
                type="url"
                id="enterLinkAvatar"
                name="link"
                placeholder="Ссылка на картинку"
                className="popup__enter popup__enter_type_link-avatar"
              />
              <span className="popup__error-message enterLinkAvatar-error"></span>
              <button
                disabled
                type="submit"
                className="popup__submit-button popup__submit-button_type_change-avatar"
              >
                Сохранить
              </button>
            </form>
            <button
              type="button"
              className="popup__close-button popup__close-button_type_change-avatar"
            ></button>
          </div>
        </section>

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

        <section className="popup popup_type_submit-form">
          <div className="popup__container popup__container_type_submit-form">
            <h2 className="popup__title popup__title_type_submit-form">
              Вы уверены?
            </h2>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_type_submit-form"
            >
              Да
            </button>
            <button
              type="button"
              className="popup__close-button popup__close-button_type_submit-form"
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
              <img
                src="images/delete-icon.svg"
                alt="Кнопка удаления карточки"
              />
            </button>
          </article>
        </template>
      </div>
    </div>
  );
}

export default App;
