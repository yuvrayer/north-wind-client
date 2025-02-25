import axios from "axios";
import CategoryModel from "../models/Category";

class Category {
    async getCategories(): Promise<CategoryModel[]> {
        const response = await axios.get<CategoryModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/categories`)
        return response.data
    }
}

// singleton
const category = new Category()
export default category