import {createSlice} from '@reduxjs/toolkit';

export const Slice=createSlice({
    name:"hlo",
    initialState:{
        arr:"https://jsonplaceholder.typicode.com/posts"
    },
    reducers:{
        update:(state,action)=>{
            state.arr=action.payload
        }
    }
})
export default Slice.reducer
export const {update}=Slice.actions;