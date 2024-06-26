import { useState } from "react"
import reviews from "../data/reviews"
import { Link } from "react-router-dom";




const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, text, image, job } = reviews[index];

    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1
        }
        return number
    }

    const nextBtn = () => {
             setIndex(index => {
                let next = index +1
               return checkNumber(next)
                
             });
    }

    const prevBtn = () => {
        setIndex(index => {
           let prev = index - 1
           return checkNumber(prev)
        })
    }

    const randomBtn = () => {
        let random = Math.floor(Math.random() * reviews.length);
        if (random === index) {
            random = index + 1;
        }
        setIndex(checkNumber(random))
    }
 

    return (
        <div style={{ margin: "0 auto", width: "500px", textAlign: "center" }} >


            <div key={id}>
                <img width={150} height={150} src={image} alt="" />
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{text}</p>
            </div>
            <Link to={`/review-details/${id}`}>details</Link>
            <div>
                <button onClick={prevBtn}>
                    prev
                </button>
                <button onClick={randomBtn}>random review</button>
                <button onClick={nextBtn}>
                    next
                </button>
            </div>


        </div>
    )
}
export default Review