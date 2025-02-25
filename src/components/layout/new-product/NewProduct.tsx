import { useForm } from 'react-hook-form'
import './NewProduct.css'
import { JSX } from 'react'
import productService from "../../../services/products.ts"
import ProductDraft from '../../../models/ProductDraft.ts'
import { useNavigate } from 'react-router-dom'


export default function NewProduct(): JSX.Element {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState
    } = useForm<ProductDraft>()

    async function submit(draft: ProductDraft) {
        try {
            await productService.createProduct(draft)
            navigate(`/products`)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewProduct'>
            <form onSubmit={handleSubmit(submit)}>
                <label> Product name: </label>
                <textarea placeholder='name' {...register('name', {
                    required: {
                        value: true,
                        message: 'Product name is mandatory'
                    }
                })}></textarea><br /><br />

                <label> Product price: </label>
                <textarea placeholder='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'Product price is mandatory'
                    },
                    valueAsNumber: true,
                    min: {
                        value: 0,
                        message: 'Product price must be positive number'
                    }
                })}></textarea><br /><br />

                <label> Product stock: </label>
                <textarea placeholder='stock' {...register('stock', {
                    required: {
                        value: true,
                        message: 'Product stock is mandatory'
                    },
                    valueAsNumber: true,
                    min: {
                        value: 0,
                        message: 'Product price must be positive number'
                    }
                })}></textarea><br /><br />

                <label> Product link: </label>
                <textarea placeholder='link' {...register('imageUrl', {
                    required: false
                })}></textarea><br /><br />

                <span className="error">{formState.errors.root?.message}</span><br /><br />
                <button>Post Product</button>
            </form>
        </div>
    )
}