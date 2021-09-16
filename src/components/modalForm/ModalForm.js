import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

function ModalForm( {isOpen, closeModal }) {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    
    const auth = getAuth();
    const handleInputChange = (event) => {
        const target = event.target
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = form
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                //const user = userCredential.user;
                alert("Usuario Creado de manera exitosa")
                // ...
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }


    return (
        <Modal show={isOpen} >
            <Modal.Header>
                <Modal.Title>Formulario de Registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    {/* <!-- email input --> */}
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
                    <button type="submit" className="btn btn-primary btn-lg" onClick={closeModal} >Crear usuario</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm
