import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signInWithPopupFacebook, signInWithPopupGoogle, signInWithEmailAndPassword } from '../../../store/login/actions'
import './Home.css'

const Home = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
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

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            dispatch(signInWithEmailAndPassword(form, cb));
        },
        [dispatch, form,cb]
    );

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
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1" onClick={handleLoginFacebook}>
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1" onClick={handleLoginGoogle}>
                                    <i className="fab fa-google"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input
                                    id="email"
                                    name='email'
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={handleInputChange}
                                    value={form.email}
                                />
                                <label className="form-label" htmlFor="email">Email address</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="password"
                                    name='password'
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={handleInputChange}
                                    value={form.password}
                                />
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2 mb-5">
                                <button type="submit" className="btn btn-primary btn-lg" >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                {/* <!-- Copyright --> */}
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
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