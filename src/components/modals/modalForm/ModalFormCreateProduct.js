import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

function ModalFormCreateProduct({ isOpenModalCreate, closeModalCreate }) {

    const [form, setForm] = useState({
        title: '',
        urlImg: '',
        price: '',
        stock: ''
    })

    const handleInputChange = (event) => {
        const target = event.target
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            firebase
                .firestore()
                .collection('data')
                .add(form);
            alert('Producto Creado')
        } catch (error) {
            alert(error)
        }
    }


    return (
        <Modal show={isOpenModalCreate} >
            <Modal.Header>
                <Modal.Title>Formulario Creacion Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    {/* <!-- urlImg input --> */}
                    <div className="form-outline mb-4">
                        <input
                            id="urlImg"
                            name='urlImg'
                            className="form-control form-control-lg"
                            placeholder="Escribe URL de la imagen"
                            onChange={handleInputChange}
                            value={form.urlImg}
                        />
                        <label className="form-label" htmlFor="urlImg">URL de la Imagen</label>
                    </div>

                    {/* <!-- Name Product input --> */}
                    <div className="form-outline mb-3">
                        <input
                            id="title"
                            name='title'
                            className="form-control form-control-lg"
                            placeholder="Ingresa el nombre del producto"
                            onChange={handleInputChange}
                            value={form.title}
                        />
                        <label className="form-label" htmlFor="title">Nombre del producto</label>
                    </div>

                    {/* <!-- Price input --> */}
                    <div className="form-outline mb-3">
                        <input
                            id="price"
                            name='price'
                            className="form-control form-control-lg"
                            placeholder="Ingrese el precio del producto"
                            onChange={handleInputChange}
                            value={form.price}
                        />
                        <label className="form-label" htmlFor="price">Precio del producto</label>
                    </div>

                    {/* <!-- stock input --> */}
                    <div className="form-outline mb-3">
                        <input
                            id="stock"
                            name='stock'
                            className="form-control form-control-lg"
                            placeholder="Ingrese el stock del producto"
                            onChange={handleInputChange}
                            value={form.stock}
                        />
                        <label className="form-label" htmlFor="stock">Stock del producto</label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" onClick={closeModalCreate} >Crear Producto</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModalCreate}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFormCreateProduct