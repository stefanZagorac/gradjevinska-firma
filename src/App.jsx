import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Home from "./pages/home/Home"
import NotFound from "./pages/notFound/NotFound"
import ScrollToTop from "./components/ScroolOnTop"


export default function App(){
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="radovi" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}