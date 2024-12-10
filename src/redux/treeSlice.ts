import { createSlice } from "@reduxjs/toolkit";
import { TreeBlogItem } from "../../type";

interface InitialState {
  cart: TreeBlogItem[];
  // userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  // userInfo: null,
};

export const counterSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existProduct) {
        existProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incressQuantity: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existProduct) {
        existProduct.quantity! += 1;
      }
    },

    decressQuantity: (state, action) => {
      const existProduct = state.cart.find(
        // @ts-ignore
        (item) => item.id === action.payload
      );
      // @ts-ignore
      if (existProduct.quantity > 1) {
        // @ts-ignore
        existProduct.quantity -= 1;
      }
    },

    deleteCount: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    reseetCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addTocart,
  reseetCart,
  deleteCount,
  incressQuantity,
  decressQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
