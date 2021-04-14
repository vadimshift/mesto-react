import "./App.css";

function App() {
  return (
    <div class="page__container">
      <header class="header">
        <img class="header__logo" src="images/logo.svg" alt="Логотип проекта Место" />
      </header>
      <main class="content">
        <section class="profile">
          <button type="button" class="profile__avatar-edit-button">
            <img
              class="profile__avatar"
              src="images/avatar-image.jpg"
              alt="фотография профиля"
            />
          </button>
          <div class="profile__info-container">
            <div class="profile__info">
              <h1 class="profile__title">Жак-Ив Кусто</h1>
              <button type="button" class="profile__edit-button"></button>
            </div>
            <p class="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" class="profile__add-button"></button>
        </section>
        <section class="elements"></section>
      </main>
      <footer class="footer">
        <p class="footer__copyright">&copy; 2021 Mesto Russia</p>
      </footer>

      <section class="popup popup_type_edit-profile">
        <div class="popup__container">
          <form
            novalidate
            name="profile"
            class="popup__form popup__form_type_edit-profile"
          >
            <h2 class="popup__title">Редактировать профиль</h2>
            <input
              required
              minlength="2"
              maxlength="40"
              id="enterNameProfile"
              name="name"
              type="text"
              placeholder="Имя"
              class="popup__enter popup__enter_type_name"
            />
            <span class="enterNameProfile-error popup__error-message"></span>
            <input
              required
              minlength="2"
              maxlength="200"
              id="enterAboutProfile"
              name="about"
              type="text"
              placeholder="О себе"
              class="popup__enter popup__enter_type_about"
            />
            <span class="popup__error-message enterAboutProfile-error"></span>
            <button
              disabled
              type="submit"
              class="popup__submit-button popup__submit-button_type_edit-profile"
            >
              Сохранить
            </button>
          </form>
          <button
            type="button"
            class="popup__close-button popup__close-button_type_edit-profile"
          ></button>
        </div>
      </section>

      <section class="popup popup_type_add-place">
        <div class="popup__container">
          <form
            novalidate
            name="place"
            class="popup__form popup__form_type_add-place"
          >
            <h2 class="popup__title">Новое место</h2>
            <input
              required
              minlength="2"
              maxlength="30"
              id="enterNamePlace"
              name="name"
              type="text"
              placeholder="Название"
              class="popup__enter popup__enter_type_name-place"
            />
            <span class="popup__error-message enterNamePlace-error"></span>
            <input
              required
              type="url"
              id="enterLinkPlace"
              name="link"
              placeholder="Ссылка на картинку"
              class="popup__enter popup__enter_type_link-image"
            />
            <span class="popup__error-message enterLinkPlace-error"></span>
            <button
              disabled
              type="submit"
              class="popup__submit-button popup__submit-button_type_add-place"
            >
              Создать
            </button>
          </form>
          <button
            type="button"
            class="popup__close-button popup__close-button_type_add-place"
          ></button>
        </div>
      </section>

      <section class="popup popup_type_change-avatar">
        <div class="popup__container">
          <form
            novalidate
            name="avatar"
            class="popup__form popup__form_type_change-avatar"
          >
            <h2 class="popup__title">Обновить аватар</h2>
            <input
              required
              type="url"
              id="enterLinkAvatar"
              name="link"
              placeholder="Ссылка на картинку"
              class="popup__enter popup__enter_type_link-avatar"
            />
            <span class="popup__error-message enterLinkAvatar-error"></span>
            <button
              disabled
              type="submit"
              class="popup__submit-button popup__submit-button_type_change-avatar"
            >
              Сохранить
            </button>
          </form>
          <button
            type="button"
            class="popup__close-button popup__close-button_type_change-avatar"
          ></button>
        </div>
      </section>

      <section class="popup popup_type_image-xl">
        <div class="popup__container popup__container_type_image-xl">
          <img class="popup__image-xl" src="#" alt="Изображение места" />
          <p class="popup__title popup__title_type_image-xl">картинка</p>
          <button
            type="button"
            class="popup__close-button popup__close-button_type_image-xl"
          ></button>
        </div>
      </section>

      <section class="popup popup_type_submit-form">
        <div class="popup__container popup__container_type_submit-form">
          <h2 class="popup__title popup__title_type_submit-form">
            Вы уверены?
          </h2>
          <button
            type="submit"
            class="popup__submit-button popup__submit-button_type_submit-form"
          >
            Да
          </button>
          <button
            type="button"
            class="popup__close-button popup__close-button_type_submit-form"
          ></button>
        </div>
      </section>

      <template class="template-place">
        <article class="element">
          <div class="element__image-container">
            <img class="element__image" src="#" alt="#" />
          </div>
          <div class="element__title">
            <h2 class="element__text-title"></h2>
            <div class="element__like-container">
              <button type="button" class="element__like-button"></button>
              <p class="element__like-amount"></p>
            </div>
          </div>
          <button type="button" class="element__delete-button">
            <img src="images/delete-icon.svg" alt="Кнопка удаления карточки" />
          </button>
        </article>
      </template>
    </div>
  );
}

export default App;
