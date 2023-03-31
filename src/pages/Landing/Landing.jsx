import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <h1 className={style.innerContainer}>Bienvenid@!</h1>
      </div>
      <div className={style.middleContainer}>
        <button onClick={() => navigate("/home")}>Ingresar</button>
      </div>
    </div>
  );
}

export default Landing;
