import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalDeleteProduct({isOpenModalDelete, closeModalDelete }) {

    return (
        <Modal show={isOpenModalDelete} >
            <Modal.Header>
                <Modal.Title>Eliminacion de Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Estas seguro de borrar el producto</h2>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" >
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
