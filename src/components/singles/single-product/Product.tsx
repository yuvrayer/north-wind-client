import { JSX } from 'react'
import Product from '../../../models/Product'
import './Product.css'
import { useNavigate } from 'react-router-dom'

interface ProductProps {
    product: Product,
    remove?(id: string): void,
    addProduct?(product: Product): void
}
export default function SingleProduct(props: ProductProps): JSX.Element {

    const {
        id,
        name,
        price,
        imageUrl
    } = props.product

    // async function deleteMe() {
    //     if (props.remove && confirm(`are you sure you want to delete "${name}"`)) {
    //         try {
    //             await productsService.deleteProduct(id)
    //             props.remove(id)
    //             // i was able to delete from the server,
    //             // this is the point to affect the UI
    //             // in other words, we need to change the state
    //         } catch (e) {
    //             alert(e)
    //         }
    //     }
    // }

    const navigate = useNavigate()
    function editProduct(event: React.MouseEvent<HTMLButtonElement>) {
        navigate(`/products/edit/${event.currentTarget.id}`)
    }

    return (
        <div className='SingleProduct'>
            <img src={imageUrl} />
            <div>
                {name}
            </div>
            <div>
                {price} $
            </div>
            <button id={id} onClick={editProduct}>update</button>
        </div>
    )
}
