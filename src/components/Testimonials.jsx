import Product from "./Product"
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io"
import {testimonials} from "../data"
import { useState } from "react"

export default function Testimonials(){
    const [index, setIndex] = useState(0);
    const {fullName, quote, job, avatar } = testimonials[index];


    function prevTestimonialHandler(){
        setIndex(old => old - 1);
        if (index <= 0){
            setIndex(testimonials.length-1);
        }
    }

    function nextTestimonialHandler(){
        setIndex(old => old  + 1);
        if (index >= testimonials.length-1){
            setIndex(0)
        }
    }


    return (
        <div className="container hr__container">
                <hr />
        <section className="testimonials">
            
            <div className="container testimonials__container">
                <Product title="Iskustva mušterija" className="testimonials__title"></Product>
                <Card className="testimonial">
                    <div className="testimonial__avatar">
                        <img src={avatar} alt="Slika Mušterije" />
                    </div>
                    <p className="testimonial__quotes">
                        {`"${quote}"`}
                    </p>
                    <h5>{fullName}</h5>
                    <small className="testimonial__title">{job}</small>
                </Card>
                <div className="testimonials__btn-container">
                    <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
                    <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
        </div>
    )
}