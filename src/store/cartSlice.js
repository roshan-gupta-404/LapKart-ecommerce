import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
 products:[]   
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                console.log('ifitem');
                item.quantity+= action.payload.quantity
            }
            else{
                console.log('elseitem');
                state.products.push(action.payload)
            }
            console.log(current(state));
            console.log(action.payload);
        },
        removeFromCart:(state, action)=>{
            state.products = state.products.filter((item)=>item.id !== action.payload.id)
        },
        inccrementQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity = (Number(item.quantity) + 1 )
            }
        },
        decrementQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity = (Number(item.quantity) - 1 )
            }
        },
        emptyCart:(state)=>{
            state.products = []
        }
    }
})

export const {addToCart, removeFromCart, inccrementQuantity, decrementQuantity, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;