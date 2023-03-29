import { IProduct } from '../interfaces/interfaces';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export const ProductCard = ( { product }: { product: IProduct }) => {

	const { addToCartProduct, cart, removeItemFromCart } = useContext(CartContext)

	const checkProductInCart = ( product: IProduct ): boolean => {
		return cart.some(item => item.id === product.id )
	}

	return (
		<li>
			<img src={ product.thumbnail } alt={ product.title } />
			<div>
				<strong>{ product.title }</strong> - $ { product.price }
			</div>
			<div>
				<button 
					style={{ backgroundColor: checkProductInCart(product) ? 'red' : '#09f' }}
					onClick={ () => {
						checkProductInCart(product)
						? removeItemFromCart(product)
						: addToCartProduct(product)
					}
					}>
						{
							checkProductInCart(product)
							? <RemoveFromCartIcon />
							: <AddToCartIcon />
						}
				</button>
			</div>
		</li>
	)
}
