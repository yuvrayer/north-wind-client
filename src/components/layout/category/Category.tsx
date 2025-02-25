import { useEffect, useState } from 'react'
import './Category.css'
import categoryService from "../../../services/category"
import CategoryModel from '../../../models/Category'
import SingleCategory from '../../singles/single-category/Category'

export default function Category() {
    const [categories, setCategory] = useState<CategoryModel[]>([])

    useEffect(() => {
        categoryService.getCategories()
            .then(setCategory)
            .catch(alert)
    }, [])

    return (
        <div className='Categories'>
            <h3>The Categories Are:</h3>
            {categories.map(c => <SingleCategory
                key={c.id}
                category={c}
            />)}
        </div>
    )
}