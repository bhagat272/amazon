import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../components/Products'

const initialState = {
  cart : [],
  items : Products,
  totalQuantity : 0,
  totalPrice: 0
}
export const cartSlice = createSlice({
 name:"cart",
 initialState,
 reducers:{
  addtocart : (state,action)=>{
    let find = state.cart.findIndex((item)=>item.id===action.payload.id);
    if(find>=0){
      state.cart[find].quantity+=1;
    }
    else{
     state.cart.push(action.payload)
    }
    state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    state.totalQuantity = state.cart.reduce((total, item) => total +  item.quantity, 0);

  }, 
  increament: (state, action) => {
    state.cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    state.totalPrice = state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    state.totalQuantity = state.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  },
  decreament: (state, action) => {
    state.cart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity>0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    state.totalPrice = state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    state.totalQuantity = state.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  },
  removeFromCart: (state, action) => {
    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    state.totalPrice = state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    state.totalQuantity = state.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
  
  
 }
})
export default cartSlice.reducer
export const {addtocart,increament,decreament,removeFromCart} = cartSlice.actions