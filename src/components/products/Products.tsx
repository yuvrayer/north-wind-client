import { JSX, useEffect, useState } from "react"
import productsService from "../../services/products"
import Product from "../../models/Product"
import useTitle from "../../hooks/useTitle.ts"
import SingleProduct from "../singles/single-product/Product.tsx"
import "./Products.css"
import { useNavigate } from "react-router-dom"

export default function Products(): JSX.Element {

    // posts: Post[]
    const [allProducts, setProducts] = useState<Product[]>([])
    const navigate = useNavigate()

    useTitle('SN - Products')

    useEffect(() => {
        // useEffect disallows the callback function to be async
        // so we either use then:
        productsService.getProducts()
            .then(setProducts)
            .catch(alert)

        // or an async IIFE:            
        // (async () => {
        //     try {
        //         const profilePosts = await profile.getProfile()
        //         setPosts(profilePosts)
        //     } catch (e) {
        //         alert(e)
        //     }
        // })()
    }, [])

    function remove(id: string): void {
        const index = allProducts.findIndex(product => product.id === id)
        if (index > -1) {
            const productsAfterRemoval = [...allProducts]
            productsAfterRemoval.splice(index, 1)
            setProducts(productsAfterRemoval)
        }
    }

    function addProduct(product: Product): void {
        setProducts([product, ...allProducts])
    }

    function searchSelectChanged(event: React.ChangeEvent<HTMLSelectElement>): void {
        navigate(`/products/${event.target.value}`)
    }

    function newProduct() {
        navigate(`/products/newproduct`)
    }

    return (
        <>
            <select name="categories" id="categoriesSearchSelect" onChange={searchSelectChanged}>
                <option>select to present specific product</option>
                {allProducts.map(p =>
                    <option value={p.id} key={p.id}>{p.name}</option>
                )}
            </select>
            <button id="addProductDraft" onClick={newProduct}>+</button>
            <div className='Products'>
                {/* {products.length === 0 && <Loading />}

            {products.length > 0 && <>
                <NewPost
                    addPost={addPost}
                /> }
                 */}

                {allProducts.map(p =>
                    <SingleProduct
                        key={p.id}
                        product={p}
                        remove={remove}
                        addProduct={addProduct}
                    />
                )}
            </div>
        </>
    )
}