import { useNavigate, useParams } from 'react-router-dom'
import './Product.css'
import { JSX, useEffect, useState } from 'react'
import productService from "../../../services/products.ts"
import SingleProduct from '../../singles/single-product/Product.tsx'
import ProductModel from '../../../models/Product.ts'

export default function Product(): JSX.Element {

    const { id } = useParams<'id'>()
    const [OnlyProduct, setOnlyProduct] = useState<ProductModel>()
    useEffect(() => {
        if (id) {
            productService.getSingleProduct(id)
                .then(product => setOnlyProduct(product))
                .catch(alert)
        }
    }, [id])

    const navigate = useNavigate()
    function back(): void {
        navigate(`/products`)
    }

    return (
        <div className='OnlyProduct'>
            {OnlyProduct &&
                <>
                    <button onClick={back}> return </button>
                    <SingleProduct product={OnlyProduct} />
                </>
            }
        </div >
    )
}