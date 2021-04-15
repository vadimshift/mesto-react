function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
