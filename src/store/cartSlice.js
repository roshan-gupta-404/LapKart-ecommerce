import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
 products:[] ,
 totalQuantity:0,  
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity+= action.payload.quantity
            }
            else{
                state.products.push(action.payload)
            }
            state.totalQuantity+= action.payload.quantity
        },
        removeFromCart:(state, action)=>{
            state.products = state.products.filter((item)=>{
               if(item.id === action.payload.id){
                state.totalQuantity-= item.quantity
                return false
               }
               else return true
            })
        },
        inccrementQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity = (Number(item.quantity) + 1 )
                state.totalQuantity++
            }
        },
        decrementQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity = (Number(item.quantity) - 1 )
                state.totalQuantity--
            }
        },
        emptyCart:(state)=>{
            state.products = []
            state.totalQuantity = 0
        }
    }
})

export const {addToCart, removeFromCart, inccrementQuantity, decrementQuantity, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;