import {Route,Routes,Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { useSelector } from 'react-redux'

export default function Home(params) {
    const user = useSelector(state=>state.user)
    return(
        <div>
            Home;
        </div>
    )
}