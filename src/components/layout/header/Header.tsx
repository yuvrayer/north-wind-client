import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <div className="header">
            <div>
                Logo
            </div>
            <nav>
                <NavLink to="/products">home</NavLink>
            </nav>
        </div>
    )
}