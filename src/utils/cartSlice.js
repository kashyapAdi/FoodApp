import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],

    },
    // this is our reducers  function
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions; // export the actions
export default cartSlice.reducer;