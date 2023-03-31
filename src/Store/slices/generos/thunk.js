import { setGeneros } from "./generosSlice";
import axios from "axios";

export const getGeneros = () => {
  return async (dispatch, getState) => {
    const { data = [] } = await axios.get("http://localhost:3001/genres");

    dispatch(
      setGeneros({
        generos: data,
      })
    );
  };
};
