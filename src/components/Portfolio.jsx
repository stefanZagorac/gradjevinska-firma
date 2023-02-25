import { portfolioData } from "../data"
import Image from "../images/portfolio.jpg"
import Product from "./Product"
import Card from "../UI/Card"


export default function Portfolio(){
    return (
        <section className="portfolio">
            <div className="container hr__container">
                <hr />
            </div>
            <div className="container portfolio__container">
                <div className="portfolio__left">
                    <div className="portfolio__image">
                        <img src={Image} alt="Portfolio slika" />
                    </div>
                </div>
                <div className="portfolio__right">
                    <Product title="Portfolio" />
                    <p className="portfolio__p">
                        Dvadeset godina u poslu dovelo je do velikih stvari
                    </p>
                    <div className="portfolio__wrapper">
                        {
                            portfolioData.map(({id, icon ,title, desc}) => {
                                return <Card key={id} className="portfolio__item">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}