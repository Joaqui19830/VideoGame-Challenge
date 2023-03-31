import { Route, Routes, useLocation} from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing.jsx';
import Home from '../src/pages/Home/Home.jsx';
import Forms from '../src/pages/Forms/Forms.jsx';
import Detail from '../src/pages/Detail/Detail.jsx';
import NavBar from '../src/components/NavBar/NavBar.jsx';
import './App.css'
// import AppRouter from './router/AppRouter';

function App() {
  const location = useLocation()
 
  return (
    <div >
     {/* <AppRouter/> */} 
     { location.pathname !== '/' ? <NavBar/>  : null }
    
     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/detail' element={<Detail/>}/>
     </Routes>
    </div>

  );
}

export default App;
