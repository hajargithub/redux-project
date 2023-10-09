import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    panier: [],
    totalpanier: 0,
    lengthpanier: 0,

}
const panierSlice = createSlice({
    name: 'panier',
    initialState,
    reducers: {

        addItemToCart: (state, action) => {
            const existingItem = state.panier.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.qt += 1;
                existingItem.totalprice += action.payload.price;
            } else {
                const newItem = { ...action.payload, qt: 1, price: action.payload.price, totalprice: action.payload.price };
                state.panier.unshift(newItem);
            }
            calculTotalPanier(state)

        },
        deleteItemById: (state, action) => {
            console.log("payload", action.payload)
            console.log("panier", state.panier)
            state.panier = state.panier.filter(item => item.id != action.payload)
            console.log("panier1", state.panier)
            calculTotalPanier(state)


        },
        incrementQt: (state, action) => {
            state.panier = state.panier.map(item => {
                if (item.id === action.payload.id) {
                    item.qt += 1;
                    item.totalprice += action.payload.price
                }
                return item;
            });
            calculTotalPanier(state)


        },
        decrementQt: (state, action) => {
            state.panier = state.panier.map(item => {
                if (item.id === action.payload.id && item.qt > 1) {
                    item.qt -= 1;
                    item.totalprice -= action.payload.price;
                }
                return item;
            });
            calculTotalPanier(state)

        }


    }
})
const calculTotalPanier = (state) => {
    state.totalpanier = state.panier.reduce((total, item) => total + item.totalprice, 0);
    state.lengthpanier = state.panier.length;
};
export const { decrementQt, incrementQt, addItemToCart, getAllItems, deleteItemById } = panierSlice.actions

export default panierSlice.reducer;