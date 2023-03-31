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
        <div className={style.customButton} onClick={() => navigate("/home")}>
          Ingresar
        </div>
      </div>
    </div>
  );
}

export default Landing;
