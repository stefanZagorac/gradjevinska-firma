import Header from "../../components/Header"
import HeaderImage from "../../images/header-image-contact.jpg"
import {MdEmail} from "react-icons/md"
import { BsMessenger } from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import "./contact.css"

export default function Contact(){
    return (
        <section>
            <Header title="Kontakt" image={HeaderImage} children="- Dostupni u svakom trenutku"/>
            <div className="container contact__container">
                    <div className="contact__info">
                        <h2>Kontakt Podaci: </h2>
                        <h3>Telefon: </h3><span>(011) - 512 - 555</span>
                        <h3>Mobilni: </h3><span>(+381) 64 - 060 / 1109</span>
                        <h3>E-mail adresa: </h3><span>gradko.doo@gradko.rs</span>
                        <h3>Adresa: </h3><span>Karađorđeva 128, Beograd.</span>
                    </div>

                    <div className="contact__maps">
                        <iframe  width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Belgrade+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
                    </div>

                    <div className="contact__buttons">
                        <a href="mailto:zagorac.stefan.dev@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
                        <a href="https://wa.me/+381640601109" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
                    </div>
                   
                   

            </div>
        </section>
    )
}