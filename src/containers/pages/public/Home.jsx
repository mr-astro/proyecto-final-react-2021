import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signInWithPopupFacebook, signInWithPopupGoogle, signInWithEmailAndPassword } from '../../../store/login/actions'
import ModalForm from '../../../components/modalForm/ModalForm'
import { Modal, Button } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory()
    const dispatch = useDispatch()

    const cb = () => {
        history.push('/private')
    }

    const handleLoginFacebook = (event) => {
        dispatch(signInWithPopupFacebook(cb))
    }
    const handleLoginGoogle = (event) => {
        dispatch(signInWithPopupGoogle(cb))
    }

    const handleInputChange = (event) => {
        const target = event.target
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    const handleSubmit =
        (event) => {
            event.preventDefault();
            dispatch(signInWithEmailAndPassword(form, cb));
        }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid" alt="Sample" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-5">
                        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Inicia sesión con</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1" onClick={handleLoginFacebook}>
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1" onClick={handleLoginGoogle}>
                                    <i className="fab fa-google"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">O</p>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input
                                    id="email"
                                    name='email'
                                    className="form-control form-control-lg"
                                    placeholder="Escribe un correo electrónico válido"
                                    onChange={handleInputChange}
                                    value={form.email}
                                />
                                <label className="form-label" htmlFor="email">Correo electrónico</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="password"
                                    name='password'
                                    className="form-control form-control-lg"
                                    placeholder="Ingresa tu password"
                                    onChange={handleInputChange}
                                    value={form.password}
                                />
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2 mb-5">
                                <button type="submit" className="btn btn-primary btn-lg" >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">¿No tienes cuenta? 
                                    <a href="#!" className="" onClick={handleShow}>Registrate aquí</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Formulario de Registro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
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
            </div>
        </section>
    )
}

export default Home