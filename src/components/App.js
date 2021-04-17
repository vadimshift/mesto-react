import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          buttonTitle="Сохранить"
          isOpen={isEditProfilePopupOpen ? "popup_active" : " "}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>
        <PopupWithForm
          name="add-place"
          title="Новое место"
          buttonTitle="Создать"
          isOpen={isAddPlacePopupOpen ? "popup_active" : " "}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>
        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          buttonTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen ? "popup_active" : " "}
          onClose={closeAllPopups}
        >
          <input
            required
            type="url"
            id="enterLinkAvatar"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__enter popup__enter_type_link-avatar"
          />
          <span className="popup__error-message enterLinkAvatar-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="submit-form"
          title="Вы уверены?"
          buttonTitle="Да"
        ></PopupWithForm>
        <ImagePopup />
        <Footer />
      </div>
    </div>
  );
}

export default App;
