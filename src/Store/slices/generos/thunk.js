import { setGeneros } from "./generosSlice";
import axios from "axios";
import {BASE_URL} from '../../../pages/utils/custom_const';

export const getGeneros = () => {
  return async (dispatch, getState) => {
    const { data = [] } = await axios.get(`${BASE_URL}/genres`);

    dispatch(
      setGeneros({
        generos: data,
      })
    );
  };
};
