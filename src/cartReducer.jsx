

export const initialState = {
    cart: []
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cart: [...state.cart, { id: action.payload.id, name: action.payload.name, quantity: 1, price: action.payload.price }]
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                )
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};
