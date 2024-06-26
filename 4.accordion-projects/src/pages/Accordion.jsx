import { useState } from "react"
import questions from "../data/questions"
import AccordionLists from "./AccordionLists";

const Accordion = () => {
    const [data, setData] = useState(questions);
    

    return (
        <div>
            {
                data.map((item) => (
                    <AccordionLists key={item.id} item={item}/>
                ))
            }
        </div>
    )
}
export default Accordion