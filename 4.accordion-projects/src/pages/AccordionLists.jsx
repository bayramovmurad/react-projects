import { useState } from "react"

const AccordionLists = ({item}) => {
    const [accordion, setAccordion] = useState(false)
  return (
    
      <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{accordion && item.info}</p>
          <button onClick={() => setAccordion(!accordion)}>{accordion ? "hide" : "show"}</button>
      </div>
  )
}
export default AccordionLists