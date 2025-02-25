import { JSX } from 'react'
import './Category.css'
import Category from '../../../models/Category'

interface ProductProps {
    category: Category
}
export default function SingleCategory(props: ProductProps): JSX.Element {

    const {
        // id,
        name
    } = props.category

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

    return (
        <div className='SingleCategory'>
            <div>
                {name}
            </div>
        </div>
    )
}
