import { setVideoGames, startLoading } from "./videogamesSlice";
import axios from "axios";

export const getVideogames = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    // TODO: Realizar Peticion https
    const { data = [] } = await axios.get(`http://localhost:3001/videogames`);
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
    console.log('Data -> ', payload);
    // TODO: que muestre un loading mientras se ejecuta el post
    console.log("Ejecutando post");
    // dispatch(startLoading());
    // // TODO: Realizar Peticion https
    const res = await axios.post(`http://localhost:3001/videogames`, payload);
    console.log("Post ejecutado");
    console.log(res);
    // dispatch(setVideoGames({
    //     videoGames: data,
    // }));
  };
};
