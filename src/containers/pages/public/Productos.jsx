import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { getProducts } from '../../../store/products/actions'
import NavBar from '../../../components/navBar/NavBar'

const About = () => {
    const products = useSelector((state) => state.products.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <h1>Vista Productos</h1>
            <div className='container row'>
                {products.map((product) => {
                    return (
                        <Card className='m-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.product.urlImg} />
                            <Card.Body>
                                <Card.Title>{product.product.title}</Card.Title>
                                <Card.Text>
                                    <h4>Precio: {product.product.price}</h4>
                                    <h5>Stock: {product.product.stock}</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default About
