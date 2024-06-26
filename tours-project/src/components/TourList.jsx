import { useState } from "react";




const TourList = ({ item, deleteTourButton }) => {
    const { id, name, info, price, image } = item;
    const [readmore,setReadmore] = useState(false);
   

    return (
        <div style={{ width: "500px" }}>
            <h3>{name}</h3>
            <p>
                { readmore ? info : info.substring(0,100)+"..."  }
                <button onClick={() => setReadmore(!readmore)}>
                    {readmore ? "Read Less" : "Read More"}
                </button>
            </p>
            
            
            
            
           
            <h5> {price}</h5>
            <img width={300} height={300} src={image} alt="tour" />
        
            <button onClick={() => deleteTourButton(id)}>not interested</button>
        </div>
    )
}
export default TourList