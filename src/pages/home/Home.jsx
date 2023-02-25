import FAQs from "../../components/FAQs"
import Footer from "../../components/Footer"
import MainHeader from "../../components/MainHeader"
import Portfolio from "../../components/Portfolio"
import Products from "../../components/Products"
import Testimonials from "../../components/Testimonials"
import "./home.css"

export default function Home(){
    return (
        <section>
            <MainHeader />
            <Products />
            <Portfolio />
            <FAQs />
            <Testimonials />
        </section>
    )
}