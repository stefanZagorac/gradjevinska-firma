import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

export default function Footer(){
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <div className="footer__logo__div">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="footer logo" className="zags_logo"/>
                    </Link>
                    </div>
                    
                    <p>
                        - Modern responsive websites builded with newest technology.
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
                    </div>
                </article>

                
                <article>
                    <h4>Navigacija</h4>
                    <Link to="/about">O nama</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Galerija</Link>
                    <Link to="/contact">Kontakt</Link>
                </article>

                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>

                <article>
                    <h4>Get in touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>

            </div>
            <div className="footer__copyright">
                <small>&copy; Stefan Zagorac, all rights reserved</small>
            </div>
        </footer>
    )
}