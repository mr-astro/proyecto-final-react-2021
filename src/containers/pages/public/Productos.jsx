import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
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
            {products.map((product) => {
                return (
                    <div className='list-group-item' key={product.id}>
                        <div className='row'>
                            <div className='col-4'>{product.product.title}</div>
                            <div className='col-4'>{product.product.price}</div>
                            <div className='col-4'><Link to={`/products/remove/${product.id}`} className='btn btn-danger'>Delete</Link></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default About
