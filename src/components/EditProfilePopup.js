function EditProfilePopup(props) {
  return (
    <section
      className={`popup popup_type_edit-profile ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
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
          onClick={props.onClose}
          className="popup__close-button popup__close-button_type_edit-profile"
        ></button>
      </div>
    </section>
  );
}

export default EditProfilePopup;
