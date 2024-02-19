import {Link, useNavigate} from 'react-router-dom'
import './css/header.css'

const Header = () => {

    const auth = localStorage.getItem("user")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div id="header">

            {auth ?
                <>
                    <h1><Link to='/'>Dictionary</Link></h1>
                    <Link to="/login"><button id="header-button" type='button' onClick={logout}>Log Out</button></Link>
                </>
                :
                <></>}
        </div>
    )
}

export default Header