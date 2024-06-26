import { useState } from "react"
import data from "../data/data";
import PersonList from "../components/PersonList";


const Person = () => {
  const [person, setPerson] = useState(data);

  const deletePerson = (id) => {
    const deletePersonData = person.filter(item => item.id !== id);

    setPerson(deletePersonData);
  }


  return (
    <div>
      <h1>Happy Brithday</h1>
      {
        person.map((item) =>
          <PersonList key={item.id} item={item} deletePerson={deletePerson}/>
        )
      }
     {
      person.length > 0 ? ( <button onClick={() => setPerson([])}>
        clear
      </button>) :
     ( <button onClick={() => setPerson(data)}>
        refresh
      </button>)
     }
    </div>
  )
}
export default Person