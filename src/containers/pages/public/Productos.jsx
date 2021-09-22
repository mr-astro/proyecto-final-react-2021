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
                        <Card className='m-3' style={{ width: '18rem' }} key={product.id}>
                            <Card.Img variant="top" src={product.product.urlImg} />
                            <Card.Body>
                                <Card.Title>{product.product.title}</Card.Title>
                                <Card.Subtitle>Precio: ${product.product.price}</Card.Subtitle>
                                <Card.Text>Stock: {product.product.stock}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default About
