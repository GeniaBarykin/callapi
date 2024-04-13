import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () =>{
    return <div className="Navbar-main-div">
        <Link className="Navbar-link" to="/">Homepage</Link>        
        <Link className="Navbar-link" to="/about">About me</Link>
    </div>
}