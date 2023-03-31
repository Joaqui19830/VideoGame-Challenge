import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../Detail/Detail.module.css";

function Detail() {
  const { selectedVideoGame = [] } = useSelector(
    (state) => state.videgamesReducer
  );

  const navigate = useNavigate();
  const backTo = () => {
    navigate(-1);
  };

  return (
    <div className={style.detail}>
      <img src={selectedVideoGame?.imagen} alt="" />
      <br />
      <strong>{selectedVideoGame?.name} </strong>
      <br />
      <span>
        <b>Plataformas:</b> {selectedVideoGame?.plataformas}
      </span>
      <br />
      <b>Descripción: </b>
      <br />
      <i>{selectedVideoGame?.descripcion}</i>
      <br />
      <span>
        <b>Fecha de lanzamiento:</b>&nbsp;
        {selectedVideoGame?.fechaDeLanzamiento}
      </span>
      <br />
      <span>
        {" "}
        <b>Rating:</b> {selectedVideoGame?.rating}
      </span>
      <br />
      <b>Generos:</b>
      <br />
      <span>
        {selectedVideoGame?.generos.map((item, idx) => {
          return <li key={idx}>{item.name}</li>;
        })}
      </span>
    </div>
  );
}

export default Detail;
