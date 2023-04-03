import { setVideoGames, startLoading } from "./videogamesSlice";
import axios from "axios";
import {BASE_URL} from '../../../pages/utils/custom_const';

export const getVideogames = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    // TODO: Realizar Peticion https
    const { data = [] } = await axios.get(`${BASE_URL}/videogames`);
    // console.log(data);

    dispatch(
      setVideoGames({
        videoGames: data,
      })
    );
  };
};

export const setNewVideogame = (payload) => {
  return async (dispatch, getState) => {
    // TODO: que muestre un loading mientras se ejecuta el post

    // // TODO: Realizar Peticion https
    const { data = {} } = await axios.post(
      `${BASE_URL}/videogames`,
      payload
    );
    // console.log(data);
    alert(`${data.message ?? data.error}`);
  };
};
