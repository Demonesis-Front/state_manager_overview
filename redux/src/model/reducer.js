const initialCartState =  {
    asyncData: null,
    isLoadingData: false,
    cartItems: [
        {
            id: 1,
            title: "First Item",
            description: "First cartItem long description",
            price: 10,
            count: 5
        }, {
            id: 2,
            title: "Second Item",
            description: "Second item long description",
            price: 40,
            count: 3
        }
    ]
};

export function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case 'fetchData':
            return {
                ...state,
                asyncData: null,
                isLoadingData: true
            }
        case 'fetchSuccess':
            return {
                ...state,
                asyncData: action.payload,
                isLoadingData: false
            }
        case 'fetchFailed':
            return {
                ...state,
                isLoadingData: false
            }
        case 'addItemToCart':
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload)
            }
        case 'deleteItemFromCart':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case 'incrementCount':
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        const newItem = {
                            ...item,
                            count: item.count + 1
                        };
                        return newItem
                    } else {
                        return item
                    }
                })
            };
        case 'decrementCount':
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        const newItem = {
                            ...item,
                            count: item.count > 1 ? item.count - 1 : 0
                        };
                        return newItem
                    } else {
                        return item
                    }
                })
            };
        default:
            return state
    }
}
