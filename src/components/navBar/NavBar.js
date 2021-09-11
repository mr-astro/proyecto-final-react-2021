import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signInWithPopup } from '../../store/login/actions'

const NavBar = () => {
    const userData = useSelector((state) => state.data)
    const isLogin = useSelector(state => state.success)

    const dispatch = useDispatch()

    const handleLogin = (event) => {
        dispatch(signInWithPopup())
    }

    return (
        <nav className='navbar d-flex row container'>
            <div className='container-fluid justify-content-start col-6'>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item'>
                        <NavLink exact to='/'> Home |</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about'> About |</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/private'> Privada</NavLink>
                    </li>
                </ul>
            </div>
            <div hidden={isLogin} className='justify-content-end col-6'>
                <button  onClick={handleLogin}>Login Google</button>
            </div>
            <div hidden={!isLogin} className='justify-content-end col-6'>
                <h5 >{userData.name}</h5>
                <img src={userData.avatar} alt='Avatar' />
            </div>
        </nav>
    )
}

export default NavBar