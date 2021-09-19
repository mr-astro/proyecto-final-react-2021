import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProducts } from '../../../store/products/actions'
import LoginBar from '../../../components/loginBar/LoginBar'
import NavBar from '../../../components/navBar/NavBar'
import ModalFormCreateProduct from '../../../components/modals/modalForm/ModalFormCreateProduct'
import './Mantenedor.css'


const Private = () => {
    const products = useSelector((state) => state.products.data)
    const [isOpenModalCreateProduct, setIsOpenModalCreateProduct] = useState(false)
    const dispatch = useDispatch()

    const openModalCreateProduct = () => setIsOpenModalCreateProduct(true)
    const closeModalCreateProduct = () => setIsOpenModalCreateProduct(false)
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <div>
                <NavBar />
                <LoginBar />
            </div>
            <ModalFormCreateProduct isOpenCreateProduct={isOpenModalCreateProduct} closeModalCreateProduct={closeModalCreateProduct}/>
            <div className='container'>
                <div className='py-5'>
                    <Button variant="primary" size="lg" onClick={openModalCreateProduct}>Crear Producto</Button>
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
                                        <Link to={`/products/remove/${product.id}`} className='btn btn-danger mx-1'>Editar</Link>
                                        <Link to={`/products/remove/${product.id}`} className='btn btn-danger mx-1'>Borrar</Link>
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