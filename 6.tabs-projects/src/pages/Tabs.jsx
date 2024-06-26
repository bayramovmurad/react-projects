import { useState, useEffect } from 'react';
import axios from 'axios';
import TabsLists from '../components/TabsLists';
import BtnContainer from '../components/BtnContainer';

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentItem,setCurrentItem] =  useState(0);

    const getTabsData = async () => {
        
        const response = await axios.get('https://www.course-api.com/react-tabs-project');
        const tabsData = response.data;
        setData(tabsData);
        setLoading(false)
    };

    useEffect(() => {
        getTabsData();
    }, [])

    if(loading){
        return <div>Loading...</div>
    }


    return (
        <div>
            <BtnContainer data={data} currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <TabsLists  data={data} currentItem={currentItem} />


        </div>
    )
}
export default Tabs