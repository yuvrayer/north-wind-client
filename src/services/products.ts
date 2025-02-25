import axios from "axios";
import Product from "../models/Product";
import ProductDraft from "../models/ProductDraft";

class Products {
    async getProducts(): Promise<Product[]> {
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_REST_SERVER_URL}/products`)
        return response.data
    }

    async getSingleProduct(id: string): Promise<Product> {
        const response = await axios.get<Product>(`${import.meta.env.VITE_REST_SERVER_URL}/products/${id}`)
        return response.data
    }

    async deleteProduct(Id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/products/${Id}`)
        return response.data
    }

    async createProduct(product: ProductDraft): Promise<Product> {
        const response = await axios.post<Product>(`${import.meta.env.VITE_REST_SERVER_URL}/products/`, product)
        return response.data
    }

    async updateProduct(id: string, product: ProductDraft): Promise<Product> {
        const response = await axios.put<Product>(`${import.meta.env.VITE_REST_SERVER_URL}/products/${id}`, product)
        return response.data
    }
}

// singleton
const products = new Products()
export default products