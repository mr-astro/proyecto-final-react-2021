import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

function ModalFormUpdateProduct({ isOpenModalUpdate, closeModalUpdate, idUpdate }) {
    const products = useSelector((state) => state.products.data)
    const data = products.find(f => f.id === idUpdate)
    //console.log(data)

    const [form, setForm] = useState({
        title: '',
        urlImg: '',
        price: '',
        stock: ''
    })

    useEffect(() => {
        if (data) {
            setForm(
                {
                    title: `${data.product.title}`,
                    urlImg: `${data.product.urlImg}`,
                    price: `${data.product.price}`,
                    stock: `${data.product.stock}`
                }
            )
        }
    }, [data])

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
                .doc(idUpdate)
                .update(form)
            alert('Producto Modificado')

        } catch (error) {
            alert(error)
        }
    }
    return (
        <Modal show={isOpenModalUpdate} >
            <Modal.Header>
                <Modal.Title>Formulario Edicion Producto</Modal.Title>
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
                            type='number'
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
                            type='number'
                            id="stock"
                            name='stock'
                            className="form-control form-control-lg"
                            placeholder="Ingrese el stock del producto"
                            onChange={handleInputChange}
                            value={form.stock}
                        />
                        <label className="form-label" htmlFor="stock">Stock del producto</label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" onClick={closeModalUpdate} >Editar Producto</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModalUpdate}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFormUpdateProduct
