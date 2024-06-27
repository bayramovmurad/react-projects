import axios from 'axios';
import {useContext,createContext,useReducer,useEffect} from 'react';
import { DATA,DELETE,DECREMENT } from '../reducer/action';
import reducer from '../reducer/action';


const CreateContext = createContext();

const initialState = {
    isLoading:true,
    data:[]
}

export const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);  


    const getProductData = async () => {
        const response = await axios.get("https://www.course-api.com/react-useReducer-cart-project");
        dispatch({type:DATA, payload: response.data})
    }

    const deleteItem  = (id) => {
        dispatch({type:DELETE,payload: {id}})
    }
    const decrement = (id) => {
        dispatch({ type: DECREMENT, payload: { id } })
    }

    useEffect(() => {
      getProductData();
    }, [])
    
    
    return(
        <CreateContext.Provider value={{ state, deleteItem, decrement }}>
            {children}
        </CreateContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(CreateContext)
}