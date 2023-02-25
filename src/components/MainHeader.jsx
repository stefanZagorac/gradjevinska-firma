import { Link } from "react-router-dom"
import Image from "../images/main__header.png"
import "./mainHeader.css"

export default function MainHeader(){
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#1 u građevini već godinama</h4>
                    <h1>Gradko D.O.O.</h1>
                    <h2>Najbolja gradjevinska firma u Srbiji</h2>
                    <p>Vaš partner u poslu već 20 godina.</p>
                    <Link to="/contact" className="btn lg">Kontakt</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-img">
                        <img src={Image} alt="Main Header Image" className="hammer-pic"/>
                    </div>
                </div>
            </div>
        </header>
    )
}