import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id !==action.payload); //Because of this we update our state in which the product we get as input will not be there
        },
    }
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;