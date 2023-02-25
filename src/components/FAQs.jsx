import Product from "./Product"
import { faqs } from "../data"
import FAQ from "./FAQ"

export default function FAQs(){
    return (
        <section className="faqs">
            <div className="container faqs__container">
            <hr />
                <Product title="Česta pitanja"/>
                <div className="faqs__wrapper">
                    {
                        faqs.map(obj => {
                            return <FAQ key={obj.id} question={obj.question} answer={obj.answer}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}