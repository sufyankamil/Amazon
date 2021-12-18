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
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            
            const newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as it is not in cart!`
                );
            }
            return {
                ...state,
                cart: newCart,
            };
            

            
        default:
            return state;
    }
};

export default reducer;