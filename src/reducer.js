export const initialState = {
    cart: [],
};

// Selectors for the cart
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                // spread operator (...)
                ...state,
                cart: [...state.cart, action.item],
            };
        default:
            return state;
    }
};

export default reducer;