import axios from 'axios';
import { starGenerosLoading } from './generosSlice';

export const getGeneros = () => {
    return async (dispatch, getState) => {
        dispatch(starGenerosLoading);

        const {data = []} = await axios.get('http://localhost:3001/genres');

        console.log('Generos -> ', data);

        
    }
}