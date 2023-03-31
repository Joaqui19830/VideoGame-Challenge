import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedVideoGame } from "../../Store/slices/videogames";
import style from "../Card/Card.module.css";

function Card({ videoGame }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickCard = () => {
    dispatch(
      setSelectedVideoGame({
        selectedVideoGame: videoGame,
      })
    );
    navigate("/detail");
  };
  return (
    <div className={style.card} onClick={onClickCard}>
      <img src={videoGame?.imagen} className={style.cardImage} alt="" />
      <div className={style.itemCardContent}>
        <strong className={style.gameTitle}>{videoGame?.name}</strong >
        <div className={style.generosContainer}>
          <strong>Generos: </strong>
          {videoGame?.generos?.map((item, idx) => {
            return <i key={idx}>{item.name} </i>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
