import {Routes,Route, Link} from 'react-router-dom'
import Home from './views/Home/Home';
import './App.css';
import Login from './views/Login/Login';
import { useEffect ,useState} from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Profile from './views/Profile/Profile';

function App() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [access,setAccess] = useState(false)
  useEffect(()=>{
    !access && navigate('/')

  },[access,navigate])

  return (
    <div>
      {pathname !== '/'&&<NavBar setAccess={setAccess}/>}
      <Routes>
        <Route path='/' element={!access?<Login setAccess={setAccess}/>:null}/>
        <Route path={`/home/:ID`} element={<Home/>}/>
        <Route path={`/profile/:ID`} element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
