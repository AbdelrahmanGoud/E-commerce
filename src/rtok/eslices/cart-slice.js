import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
      initialState:[],
      name:'cartSlice',
      reducers:{
          addTocart :(state,action)=>{
            const findProduct =state.find((product)=>product.id ===action.payload.id);
            if(findProduct)
            {
                    findProduct.quantity +=1;
            }else{
                const clons ={...action.payload,quantity:1}
                state.push(clons)  
            }
                 
          },
          deleteFromcart:(state,action)=>{
            return state.filter((product)=>product.id !==action.payload.id)
          },
          clearFromcart:(state,action)=>{
            return [];
          }
      }    
})

export const {addTocart,deleteFromcart,clearFromcart} =cartSlice.actions;
export default cartSlice.reducer;
