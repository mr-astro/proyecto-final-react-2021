import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import useModal from '../../../hooks/useModal'
import { getProducts } from '../../../store/products/actions'
import LoginBar from '../../../components/loginBar/LoginBar'
import NavBar from '../../../components/navBar/NavBar'
import ModalFormCreateProduct from '../../../components/modals/modalForm/ModalFormCreateProduct'
import ModalDeleteProduct from '../../../components/modals/modalForm/ModalDeleteProduct'
import './Mantenedor.css'


const Private = () => {
    const products = useSelector((state) => state.products.data)
    const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal()
    const [isOpenModalDelete, openModalDelete, closeModalDelete] = useModal()

    const dispatch = useDispatch()

    const prueba = () => {
        openModalDelete()
        
    }
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <div>
                <NavBar />
                <LoginBar />
            </div>
            <ModalFormCreateProduct isOpenModalCreate={isOpenModalCreate} closeModalCreate={closeModalCreate}/>
            <ModalDeleteProduct isOpenModalDelete={isOpenModalDelete} closeModalDelete={closeModalDelete}/>
            <div className='container'>
                <div className='py-5'>
                    <Button variant="primary" size="lg" onClick={openModalCreate}>Crear Producto</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre Producto</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr className='tableProducts' key={product.id}>
                                    <td><img className='imgProduct img-thumbnail' src={product.product.urlImg} alt="imgProduct" /></td>
                                    <td>{product.product.title}</td>
                                    <td>{product.product.price}</td>
                                    <td>{product.product.stock}</td>
                                    <td>
                                        <Button className='mx-3' variant='danger' size='lg'>Editar</Button>
                                        <Button variant='danger' size='lg' onClick={prueba}>Borrar</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Private