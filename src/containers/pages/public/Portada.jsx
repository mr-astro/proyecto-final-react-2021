import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Portada.css'

function Home() {
    const history = useHistory()
    const cbL = () => {
        history.push('/login')
    }

    const cbP = () => {
        history.push('/productos')
    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid" alt="Sample" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-5">
                        <h1>Bienvenidos al Proyecto React</h1>
                        <p>Para ingresar al mantenedor debes accionar el boton de "INGRESAR"</p>
                        <p>Para ver los PRODUCTOS debes accionar el boton de "PRODUCTOS"</p>
                        <Button variant="danger" size="lg" onClick={cbL} className='mx-3'>INGRESAR</Button>
                        <Button variant="primary" size="lg" onClick={cbP}>Productos</Button>
                    </div>
                </div>
            </div>
            { /* Footer */}
            <footer className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                {/* <!-- Copyright --> */}
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2021. All rights reserved.
                </div>
                {/* <!-- Copyright --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </footer>
        </section>
    )
}

export default Home
