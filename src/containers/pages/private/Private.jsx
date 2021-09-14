import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../../../components/navBar/NavBar'


const Private = () => {
    const userData = useSelector((state) => state.data)

    return (
        <div>
            <NavBar />
            <h1>Vista Privada</h1>
            <p>{userData.name}</p>
            <img src={userData.avatar} alt="Avatar" />
        </div>
    )
}

export default Private