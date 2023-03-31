import { Route, Routes, useLocation} from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing.jsx';
import Home from '../src/pages/Home/Home.jsx';
import Forms from '../src/pages/Forms/Forms.jsx';
import Detail from '../src/pages/Detail/Detail.jsx';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar.jsx';
// import AppRouter from './router/AppRouter';

function App() {
  const location = useLocation()
 
  return (
    <div className='App' >
     { location.pathname !== '/' ? <SearchBar/>  : null }
    
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
