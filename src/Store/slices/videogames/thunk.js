import { setVideoGames, startLoading } from "./videogamesSlice"
import axios from "axios";

export const getVideogames = (page = 0) => {
    return  async (dispatch, getState) => {
        dispatch(startLoading());

        // TODO: Realizar Peticion https
        const {data = []} = await axios.get(`http://localhost:3001/videogames`)
        // console.log(data);

        dispatch(setVideoGames({
            videoGames: data,
        }));
    }
}



