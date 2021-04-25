function AddPlacePopup(props) {
  return (
    <section
      className={`popup popup_type_add-place ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
      <div className="popup__container">
        <form
          noValidate
          name="profile"
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
          onClick={props.onClose}
          className="popup__close-button popup__close-button_type_add-place"
        ></button>
      </div>
    </section>
  );
}
export default AddPlacePopup;
