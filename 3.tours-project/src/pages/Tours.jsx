import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import TourList from '../components/TourList';

const Tours = () => {
    const [tours,setTours] = useState([]);

    const getToursData = async () => {
        const response = await axios.get("https://www.course-api.com/react-tours-project");
        const data = response.data;
        setTours(data);
    };

    const deleteTourButton = (id) => {
        const deleteTourData = tours.filter(item => item.id !== id);
        setTours(deleteTourData);
    }

    useEffect(()=> {
        getToursData();
    },[]);

    if(tours.length == 0) {
        return <button onClick={()=> setTours(getToursData)}>
            refresh
        </button>
    }

  return (
    <div>
        {
            tours.map((item) => 
                <TourList key={item.id} item={item} deleteTourButton={deleteTourButton}/>
            )
        }
    </div>
  )
}
export default Tours