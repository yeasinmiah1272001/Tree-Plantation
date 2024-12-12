import { createSlice } from "@reduxjs/toolkit";
import { TreeBlogItem } from "../../type";

interface InitialState {
  cart: TreeBlogItem[];
  // orderData: any[];
  // userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  // orderData: [],
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
        (item) => item.id === action.payload
      );

      if (existProduct) {
        existProduct.quantity! -= 1;
      }
    },

    deleteCount: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    reseetCart: (state) => {
      state.cart = [];
    },

    // addOrder: (state, action) => {
    //   const existingOrder = state.orderData.find(
    //     (item) => item._id === action.payload._id
    //   );
    //   if (existingOrder) {
    //     state.orderData.push(action.payload);
    //   } else {
    //     state.orderData = action.payload;
    //   }
    // },
  },
});

export const {
  addTocart,
  reseetCart,
  deleteCount,
  incressQuantity,
  decressQuantity,
  // addOrder,
} = counterSlice.actions;

export default counterSlice.reducer;
