import "./notFound.css"
import  {Link}  from "react-router-dom"



export default function NotFound(){
    return (
        <section>
            <div className="container notfound__container">
                <h1>Error 404: Page is not found.</h1>
                <Link to="/" className="btn">Nazad na početnu stranicu.</Link>
            </div>
        </section>
    )
}