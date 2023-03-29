import { ICart, IProduct } from "../interfaces/interfaces";
import { CartState } from "./cartProvider";

type CartActionType =
| { type: 'Cart - AddToCart', payload: ICart }
| { type: 'Cart - AddToCartCurrentProduct', payload: ICart[] }
| { type: 'Cart - CleanCart' }
| { type: 'Cart - SetCartFromStorage', payload: ICart[] | [] }
| { type: 'Cart - RemoveProductFromCart', payload: IProduct }

export const cartReducer = ( state: CartState, action: CartActionType ): CartState => {

	switch (action.type) {
		case 'Cart - AddToCart':
			return {
				...state,
				cart: [ ...state.cart, action.payload ]
			}
		case 'Cart - AddToCartCurrentProduct':
			return {
				...state,
				cart: action.payload
			}
		case 'Cart - CleanCart':
			return {
				...state,
				cart: []
			}
		case 'Cart - SetCartFromStorage':
			return {
				...state,
				cart: action.payload
			}
		case 'Cart - RemoveProductFromCart':
			return {
				...state,
				cart: state.cart.filter( product => product.id !== action.payload.id )
			}
		default:
			return state;
	}

}