import Product from "./Product"
import {products} from "../data.js"
import Card from "../UI/Card"
import { HashLink as Link } from 'react-router-hash-link';

export default function Products(){
    return (
        <section className="products">
            <div className="container products__container">
                <Product title="Usluge"/>
            <div className="products__wrapper">
                {products.map(({id,title,icon,info,path}) => {
                    return <Card className="products__product" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Pogledajte</Link>
                           </Card>
                })}
            </div>
            </div>
        </section>
    )
}