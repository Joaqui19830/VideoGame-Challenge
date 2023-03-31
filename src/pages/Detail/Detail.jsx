import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from '../Detail/Detail.module.css';


function Detail() {
    // const { id } = useParams()
    // console.log(id);

    const {  selectedVideoGame = [] } = useSelector(state => state.videgamesReducer);
    
    const navigate = useNavigate()
    const backTo = () => {
        navigate(-1)
    }
 

    return (
       
            <div className={style.detail}>
                <button onClick={backTo} className={style.button}>Regresar</button>
                <h2>{selectedVideoGame?.name} </h2>
                <img src={selectedVideoGame?.imagen} alt="" />
                <h3>Plataformas: {selectedVideoGame?.plataformas}</h3>
                <h3>{selectedVideoGame?.descripcion}</h3>
                <h3>Fecha de lanzamiento: {selectedVideoGame?.fechaDeLanzamiento}</h3>
                <h3>Rating: {selectedVideoGame?.rating}</h3>
                <h3>{selectedVideoGame?.generos.map((item, idx) => {
                    return <li key ={idx}>{item.name}</li>
                })}</h3>
               
            </div>
            
       
    )
}

export default Detail;