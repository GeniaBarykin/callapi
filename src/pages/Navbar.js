import { Link } from "react-router-dom"

export const Navbar = () =>{
    return <div>
        <Link to="/">Домашняя страница</Link>
        <Link to="/about">Обо мне</Link>
    </div>
}