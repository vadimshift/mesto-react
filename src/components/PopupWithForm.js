function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <form
          noValidate
          name="profile"
          className={`popup__form popup__form_type_${props.name}`}
        >
          <h2 className="popup__title">{props.title}</h2>

          {props.children}

          <button
            disabled
            type="submit"
            className={`popup__submit-button popup__submit-button_type_${props.name}`}
          >
            {props.buttonTitle}
          </button>
        </form>
        <button
          type="button"
          className={`popup__close-button popup__close-button_type_${props.name}`}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
