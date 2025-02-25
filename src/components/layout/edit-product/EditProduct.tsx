import { useForm } from 'react-hook-form'
import './EditProduct.css'
import { JSX, useEffect } from 'react'
import productService from "../../../services/products.ts"
import ProductDraft from '../../../models/ProductDraft.ts'
import { useNavigate, useParams } from 'react-router-dom'


export default function EditProduct(): JSX.Element {

    const { id } = useParams<'id'>()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<ProductDraft>()

    async function submit(draft: ProductDraft) {
        try {
            if (id) {
                await productService.updateProduct(id, draft)
                navigate(`/products`)
            }
        } catch (e) {
            alert(e)
        }
    }


    useEffect(() => {
        if (id) {
            productService.getSingleProduct(id)
                .then(reset)
                .catch(alert)
        }
    }, [id, reset])

    return (
        <div className='NewProduct'>
            <form onSubmit={handleSubmit(submit)}>
                <br />
                <label>Update the data for the product with the id: {id}</label><br />
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
                    },
                    validate: (value) => !isNaN(value) || 'Please enter a valid price number'
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
                    },
                    validate: (value) => !isNaN(value) || 'Please enter a valid stock number'
                })}></textarea><br /><br />

                <label> Product link: </label>
                <textarea placeholder='link' {...register('imageUrl', {
                    required: false
                })}></textarea> <br />

                <span className="error">{formState.errors.price?.message ||
                    formState.errors.stock?.message ||
                    formState.errors.name?.message
                }</span><br />
                <button>Post Product</button>
            </form>
        </div>
    )
}