import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterVideoGame, filtrarPorApiOBdd, filtrarPorGenero, filtrarPorOrdenDeNombre, filtrarPorRating} from "../../Store/slices/country/countrySlice";
import style from '../SearchBar/SearchBar.module.css'


function SearchBar() {
    const { generos = [] } = useSelector(state => state.countryReducer);
    const [name, setName] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const onInputChangeValue = (e) => {
        const newValue = e.target.value
        setName(newValue);
        if (newValue === '') {
            dispatch(filterVideoGame({
                value: newValue
            }))
        }
    }

    const onClickSearch = () => {
        dispatch(filterVideoGame({
            value: name
        }))
    }

    const GoForms = () => {
        navigate('/forms')
    }
    const GoHome = () => {
        navigate('/home')
    }

    const handleChangeOrderByName = (e) => {
        dispatch(filtrarPorOrdenDeNombre(e.target.value))
       
    }

    const handleChangeOrderApiAndBdd = (e) => {
        dispatch(filtrarPorApiOBdd(e.target.value))
        
    }
    
    const handleChangeGenero = (e) => {
        dispatch(filtrarPorGenero(e.target.value))
        // console.log(e.target.value);
    }
    const handleChangeOrderRating = (e) => {
     dispatch(filtrarPorRating(e.target.value))
    }
    
    return (
        <div className={style.container}>
            <div>
                <input type="text" placeholder="Buscar..." value={name} onChange={onInputChangeValue} />
                <button onClick={onClickSearch}>Buscar</button>
            </div>

            <button onClick={GoHome}>Home</button>

            <button onClick={GoForms}>Crear Videojuego</button>

            <select onChange={handleChangeOrderByName}>
                <option value="asc" >Ascendente</option>
                <option value="desc">Descendente</option>
             </select>
            <select onChange={handleChangeOrderRating}>
                
                <option>Rating</option>
                <option value="asc" >Ascendente</option>
                <option value="desc">Descendente</option>
             </select>
            <select onChange={handleChangeOrderApiAndBdd}>
                
                <option value="Api">Api</option>
                <option >BDD</option>
             </select>
             {/* <select onChange={handleChangeOrderRating}>
                <option value="asc" >Ascendente por rating</option>
                <option value="desc">Descendente por rating</option>
             </select> */}
             <select onChange={handleChangeGenero}>
                <option value="All">All genres</option>

                
                {
                    generos.map((genre, idx) => (
                        <option key={idx} value={genre.name}>{genre.name} </option>
                    ))
                }
            </select>


        </div>
    )
}

export default SearchBar;