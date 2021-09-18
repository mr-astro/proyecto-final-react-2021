import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from '../../store/login/actions'
import './LoginBar.css'


export default function LoginBar() {
    const userData = useSelector((state) => state.login.data)
    const dispatch = useDispatch()
    const history = useHistory()

    const cbL = () => {
        history.push('/')
    }

    const handleOnClick = () => {
        dispatch(logOut(cbL));
    }


    return (
        <div className='bg-black'>
            <div className='container LoginBar'>
                <h4>Bienvenido :  <strong>{userData.name}</strong></h4>
                <img className='avatar px-3' src={userData.avatar} alt="Avatar" />
                <button className='btn btn-danger' onClick={handleOnClick} >Salir</button>
            </div>

        </div>
    )
}
