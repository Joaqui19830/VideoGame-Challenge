import { useNavigate } from "react-router-dom";

function Landing(){
const navigate = useNavigate()
    return (
        <div>
            <h1>Landing</h1>
            <button onClick={() => navigate('/home')}>Ingresar</button>
        </div>
    )
}

export default Landing;