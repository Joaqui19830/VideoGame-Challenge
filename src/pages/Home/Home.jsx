import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {
  setPage,
  setPagePrevius,
} from "../../Store/slices/videogames";
import { getVideogames } from "../../Store/slices/videogames";

import nextArrow from "../../assets/img/arrow-forward.png";
import previousArrow from "../../assets/img/arrow-back.png";
import homeStyle from "./Home.module.css";
import { getGeneros } from "../../Store/slices/generos/thunk";

function Home() {
  const { page, hideNextPageButton, hidePreviousPageButton } = useSelector(
    (state) => state.videgamesReducer
  );
  // TODO: utilizar useeffect para obtener el listado al inicio
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGeneros());
  }, [dispatch]);
  return (
    <div>
      {/* <CardsContainer />
      <img
        style={{ visibility: hidePreviousPageButton ? "hidden" : "visible" }}
        onClick={() => dispatch(setPagePrevius())}
        src={previousArrow}
        className={homeStyle.arrowButton}
        alt=""
      />
      <span className={homeStyle.pageLabel}>{"Página: " + (page + 1)}</span>
      <img
        style={{ visibility: hideNextPageButton ? "hidden" : "visible" }}
        onClick={() => dispatch(setPage())}
        src={nextArrow}
        className={homeStyle.arrowButton}
        alt=""
      /> */}
    </div>
  );
}

export default Home;
