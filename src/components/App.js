import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getProfileInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            buttonTitle="Сохранить"
            isOpen={isEditProfilePopupOpen}
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
            isOpen={isAddPlacePopupOpen}
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
            isOpen={isEditAvatarPopupOpen}
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
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
