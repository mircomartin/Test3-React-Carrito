import { useReducer } from 'react';
import { ICart, IProduct } from '../interfaces/interfaces';
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

export interface CartState {
	cart: ICart[] | [];
}

const Cart_INITIAL_STATE: CartState = {
	cart: []
}

export const CartProvider = ( {children}: { children: JSX.Element | JSX.Element[] } ) => {

const [state, dispatch] = useReducer(cartReducer , Cart_INITIAL_STATE)

	const addToCartProduct = ( product: IProduct ) => {

		const productInCartIndex = state.cart.findIndex( item => item.id === product.id )

		if(productInCartIndex >= 0){
			const newCart = structuredClone(state.cart)
			newCart[productInCartIndex].quantity += 1

			dispatch({
				type: "Cart - AddToCartCurrentProduct",
				payload: newCart
			})

			localStorage.removeItem('cart')
			localStorage.setItem('cart', JSON.stringify(newCart));

		}else{

			dispatch({
				type: "Cart - AddToCart",
				payload: { ...product, quantity: 1 }
			})

			localStorage.setItem('cart', JSON.stringify([ ...state.cart, product ]));

		}

	}

	const cleanCart = () => {
		localStorage.removeItem('cart')
		dispatch({
			type: "Cart - CleanCart"
		})
	}

	const getCurrentCart = ( cart: ICart[] ) => {
		dispatch({
			type: 'Cart - SetCartFromStorage',
			payload: cart
		})
	}

	const removeItemFromCart = ( product: IProduct ) => {

		const getElementsfromLocalStorage = () => {
			let elements = [];
			if (localStorage.getItem('cart')) {
					elements = JSON.parse(localStorage.getItem('cart')!);
			}
			return elements;
		};

		const removeElementLocalStorage = (product: IProduct) => {
				let elements: ICart[] | [] = getElementsfromLocalStorage();
				elements = elements.filter(element => element.id !== product.id);
				localStorage.setItem('cart', JSON.stringify(elements));
		};

		removeElementLocalStorage(product)
	
		dispatch({
			type: "Cart - RemoveProductFromCart",
			payload: product
		})

	}

	return (
		<CartContext.Provider value={{
			...state,

			//Methods
			addToCartProduct,
			cleanCart,
			getCurrentCart,
			removeItemFromCart
		}}>
			{ children }
		</CartContext.Provider>
	)
}