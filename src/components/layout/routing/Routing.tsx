import { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Products from "../../products/Products";
import Product from "../product/Product";
import NewProduct from "../new-product/NewProduct";
import EditProduct from "../edit-product/EditProduct";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products"/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="/products/newproduct" element={<NewProduct />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
