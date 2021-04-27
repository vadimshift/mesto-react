import { useRef } from "react";

function EditAvatarPopup(props) {
  //const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <section
      className={`popup popup_type_change-avatar ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
      <div className="popup__container">
        <form
          onSubmit={handleSubmit}
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
            ref={avatarRef}
          />
          <span className="popup__error-message enterLinkAvatar-error"></span>
          <button
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
