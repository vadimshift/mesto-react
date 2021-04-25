function EditAvatarPopup(props) {
  return (
    <section
      className={`popup popup_type_change-avatar ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
      <div className="popup__container">
        <form
          noValidate
          name="profile"
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
          onClick={props.onClose}
          className="popup__close-button popup__close-button_type_change-avatar"
        ></button>
      </div>
    </section>
  );
}
export default EditAvatarPopup;
