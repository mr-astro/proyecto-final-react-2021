import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from '../../store/login/actions'


export default function LoginBar() {
    const userData = useSelector((state) => state.data)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const cbL = () => {
        history.push('/')
    }

    const handleOnClick = useCallback(
        (event) => {
            dispatch(logOut(cbL));
        },
        [dispatch, cbL]
    );


    return (
        <div className='container'>
            <p>Bienvenido {userData.name}</p>
            <img src={userData.avatar} alt="Avatar" />
            <button className='btn btn-danger' onClick={handleOnClick} >Logout</button>
        </div>
    )
}
