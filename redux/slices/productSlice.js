import { createSlice } from "@reduxjs/toolkit";
const initialState =[];
export const productSlice=createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        addProduct(state,action){
            state.push(action.payload)
        },
        incCount(state,action){
            const idList=state.map(product=>product.id)
            state[idList.findIndex((id)=>id==action.payload.id)].count+=1

        },
        decCount(state,action){
            const idList=state.map(product=>product.id)
            state[idList.findIndex((id)=>id==action.payload.id)].count-=1

        },
        delProduct(state,action){
            const idList=state.map(product=>product.id)
            const removeItem=idList.findIndex((id)=>id==action.payload.id)
            state.splice(removeItem,1)
        }
    }

})
export const {addProduct , incCount ,decCount, delProduct}=productSlice.actions;
export default productSlice.reducer;