import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedVideoGame } from "../../Store/slices/country/countrySlice";
import style from "../Card/Card.module.css";

function Card({ videoGame }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickCard = () => {
     dispatch(setSelectedVideoGame({
      selectedVideoGame: videoGame
     }));
     navigate('/detail');

  } 
  return (
    <div className={style.card} onClick={onClickCard}>
      <img src={videoGame?.imagen} className= {style.image} alt="" />
      <h2>{videoGame?.name}</h2>
      <h2>Generos: 
      
        {videoGame?.genres?.map((item, idx) => {
          return (
            <ul key={idx}>
              <li>{item.name}</li>
            </ul>
          )
        })}
      
     
      {videoGame?.generos?.map((item, idx) => {
          return(
          <ul key={idx}>
            <li>{item.name}</li>
          </ul>
          )
        })}

        
         </h2>

      {/* <h3>{country?.region}</h3> */}
    </div>
  );
}

export default Card;
