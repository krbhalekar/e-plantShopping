import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
const loadInitialState = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return { items: [] };
  }
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: loadInitialState(),
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; // Destructure product details from the action payload
        // Check if the item already exists in the cart by comparing names
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          // If item already exists in the cart, increase its quantity
          existingItem.quantity++;
        } else {
          // If item does not exist, add it to the cart with quantity 1
          state.items.push({ name, image, cost, quantity: 1 });
        }
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
      },
      
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(state));      itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
