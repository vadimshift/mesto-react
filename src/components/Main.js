import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "../components/Card";

function Main(props) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);

  
  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        const data = cardsData.map((item) => ({
          id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
        }));
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            type="button"
            onClick={props.onEditAvatar}
            className="profile__avatar-edit-button"
          >
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="фотография профиля"
            />
          </button>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                onClick={props.onEditProfile}
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            type="button"
            onClick={props.onAddPlace}
            className="profile__add-button"
          ></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card
              onCardClick={props.onCardClick}  
              key={card.id}
              name={card.name}
              link={card.link}
              likes={card.likes.length}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
