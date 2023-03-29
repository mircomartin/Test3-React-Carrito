
import { useContext, useEffect, useId } from 'react';
import { CartContext } from "../context/CartContext.js";
import { ICart, IProduct } from "../interfaces/interfaces.js";
import { CartIcon, ClearCartIcon } from './Icons.jsx';

function CartItem ( { product, addToCartProduct }: { product: ICart, addToCartProduct: (product: IProduct) => void } ) {
  return (
    <li>
      <img
        src={ product.thumbnail }
        alt={ product.title }
      />
      <div>
        <strong>{ product.title }</strong> - $ { product.price }
      </div>
      <footer>
        <small>
          Qty: { product.quantity }
        </small>
        <button onClick={ () => addToCartProduct( product ) }>+</button>
      </footer>
    </li>
  )
}

export function Cart () {

  const cartCheckboxId = useId();

  const { cart, cleanCart, addToCartProduct, getCurrentCart } = useContext(CartContext)

  const cartFromStorage = JSON.parse(localStorage.getItem('cart')!);

  useEffect(() => {
    
    if (cartFromStorage) {
      getCurrentCart(cartFromStorage)
    }
    
  }, [])
  
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map((product) => (
              <CartItem key={ product.id } product={ product } addToCartProduct={ addToCartProduct } />
            ))
          }
        </ul>

        <button onClick={cleanCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}