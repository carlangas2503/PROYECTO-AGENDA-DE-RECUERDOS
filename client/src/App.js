import {Routes,Route} from 'react-router-dom'
import Home from './views/Home/Home';
import './App.css';
import Login from './views/Login/Login';
import { useEffect ,useState} from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Profile from './views/Profile/Profile';
import DashAdmin from './views/DashAdmin/DashAdmin';
import CreateAcount from './components/CreateAcount/CreateAcount';
import Search from './components/Search/Search';

function App() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [access,setAccess] = useState(false)
  useEffect(()=>{
    !access && navigate('/')

  },[access,navigate])

  return (
    <div>
      {pathname !== '/' && pathname !== '/crearCuenta' && <NavBar setAccess={setAccess}/>}
      <Routes>
        <Route path='/' element={!access?<Login setAccess={setAccess}/>:null}/>
        <Route path={`/home/`} element={<Home/>}/>
        <Route path={`/profile/:ID`} element={<Profile/>}/>
        <Route path='/dashAdmin' element={<DashAdmin/>}/>
        <Route path='/crearCuenta' element={<CreateAcount setAccess={setAccess}/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
