import {AiOutlinePlus} from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"

export default function FAQ({question, answer}){
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

    function showHide(){
        setIsAnswerShowing(old => !old);
    }

    return (
        <article className="faq" onClick={showHide}>
            <div>
                <h4>{question}</h4>
                <button className="faq__icon">
                    {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {isAnswerShowing && <p>{answer}</p>}
        </article>
    )
}