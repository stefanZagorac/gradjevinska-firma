import "./navbar.css"
import { useState, useEffect, useRef } from "react"
import Logo from "../images/logo.png"
import {Link, NavLink} from "react-router-dom"
import {links} from "../data"
import {GoThreeBars} from "react-icons/go"

export default function Navbar(){
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        setWidth(window.innerWidth);
    }, [width])

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="link">
                    <img src={Logo} alt="Nav Logo" className="logo"/>
                </Link>
                <p className="nav__p"> - Websites</p>
                <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
                    {links.map((obj, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={obj.path} onClick={() => setIsNavShowing(oldVal => false)} className={({isActive}) => isActive ? "active-nav" : ""}>{obj.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => setIsNavShowing(oldVal => !oldVal)} className="nav__toggle-btn">
                    <GoThreeBars />
                </button>

            </div>
        </nav>
    )
}