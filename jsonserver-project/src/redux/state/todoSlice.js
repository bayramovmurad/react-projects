import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    createTodo: "",
    editTodo: null
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setCreateTodo: (state, action) => {
            state.createTodo = action.payload
        },
        setEditTodo: (state, action) => {
            state.editTodo = action.payload
        }
    }
});


export const { setCreateTodo, setEditTodo,setCheckboxState } = todoSlice.actions;
export default todoSlice.reducer;