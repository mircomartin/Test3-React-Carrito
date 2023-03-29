import { createContext } from 'react';
import { ICart, IProduct } from "../interfaces/interfaces";

interface ContextProps {
	cart: ICart[] | [];

	addToCartProduct: (product: IProduct) => void;
	cleanCart: () => void;
	getCurrentCart: (cart: ICart[]) => void;
	removeItemFromCart: (product: IProduct) => void;
}

export const CartContext = createContext({} as ContextProps )