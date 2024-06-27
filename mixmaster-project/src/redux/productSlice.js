import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    isLoading:true,
    data:[],
    productSearch:"",
    productResult:[],
};

export const getMixMasterData = createAsyncThunk("product/getMixMasterData", async() => {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    return response.data;
    
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductSearch(state,action){
            state.productSearch = action.payload
        },
        setProductResult(state,action){
            state.productResult = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMixMasterData.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(getMixMasterData.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getMixMasterData.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const {setProductResult,setProductSearch} = productSlice.actions;
export default productSlice.reducer;