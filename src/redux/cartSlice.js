import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/placeholder.png"
import img2 from "../assets/placeholder-1.png"
import img3 from "../assets/placeholder-2.png"
import img4 from "../assets/placeholder-3.png"
import img5 from "../assets/placeholder-4.png"
import img6 from "../assets/placeholder-5.png"
import img7 from "../assets/placeholder-6.png"
import img8 from "../assets/placeholder-7.png"
import img9 from "../assets/placeholder-8.png"
import img10 from "../assets/placeholder-9.png"

const initialState = {
  items: [
    {
      id: 1,
      name: "Fitness and activity Tracker",
      count: 12,
      img: img1,
      price: "$33.3",
    },
    {
      id: 2,
      name: "Xbox White Joystick",
      count: 12,
      img: img5,
      price: "$98.4",
    },
    {
      id: 3,
      name: "Super Boost Headphones",
      count: 12,
      img: img7,
      price: "$33.3",
    },
    {
      id: 4,
      name: "X-Ray 2 Square PACK",
      count: 12,
      img: img2,
      price: "$33.3",
    },
    {
      id: 5,
      name: "AX1326 Automatic Analog",
      count: 12,
      img: img9,
      price: "$33.3",
    },
    {
      id: 6,
      name: "Ice White Airpods",
      count: 12,
      img: img4,
      price: "$521.3",
    },
    {
      id: 7,
      name: "Hazor Mouse Gaming",
      count: 12,
      img: img6,
      price: "$21.3",
    },
    {
      id: 8,
      name: "LG 260 L 3 Star Frost",
      count: 12,
      img: img10,
      price: "$333.3",
    },
    {
      id: 9,
      name: "Levi's Men's Printed T-Shirt",
      count: 12,
      img: img8,
      price: "$33.3",
    },
    {
      id: 10,
      name: "SONY PLAYSTATION 5",
      count: 12,
      img: img3,
      price: "$322.3",
    }

  ],
  cart: [],
  quantity: 0,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.count > 0) {
        state.cart.push(itemId);
        item.count--;
      }

    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((itemIdInCart) => itemIdInCart !== itemId);
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.count++;
      }
    },
  },
});

export const { addToCart, removeFromCart } = itemSlice.actions;
export default itemSlice.reducer;
