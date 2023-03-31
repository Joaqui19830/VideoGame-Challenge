import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";

function CardsContainer() {
  const { videoGames = [] } = useSelector((state) => state.videgamesReducer);
  return (
    <div className={style.conntainerCards}>
      {videoGames.map((videogame, id) => {
        return <Card key={id} videoGame={videogame} />;
      })}
    </div>
  );
}

export default CardsContainer;
