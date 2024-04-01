import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  remplacer entièrement le contenu du panier par une nouvelle liste d'articles
    setItems: (state, action) => {
      state.items = action.payload;
    },

    // ajouter un nouvel article au panier sans remplacer les articles existants
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    // retirer un élément du panier
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    // compteur d'un article spécifique dans le panier
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    // décrémenter le compteur d'un article spécifique dans le panier
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    // asculer l'état d'ouverture du panier entre ouvert et fermé
    setIsCartOpen: (state) => {
        state.isCartOpen = ! state.isCartOpen;
    }
  },
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
