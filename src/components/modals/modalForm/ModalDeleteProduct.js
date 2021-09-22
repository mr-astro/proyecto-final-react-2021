import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

function ModalDeleteProduct({ isOpenModalDelete, closeModalDelete, idEliminar }) {

    const handlerDeleteProduct = () => {
        deleteProduct()
        closeModalDelete()
    }

    const deleteProduct = () => {
        try {
            firebase
            .firestore()
                .collection('data')
                .doc(idEliminar)
                .delete()
            
        } catch (error) {
            
        }
    }

    return (
        <Modal show={isOpenModalDelete} >
            <Modal.Header>
                <Modal.Title>Eliminacion de Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>¿Estas seguro de borrar el producto seleccionado?</h2>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handlerDeleteProduct}>
                    Eliminar
                </Button>
                <Button variant="secondary" onClick={closeModalDelete}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDeleteProduct
