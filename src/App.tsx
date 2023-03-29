import { Header } from "./components/Header"
import { ProductList } from "./components/ProductList"
import { useFilter } from "./hooks/useFilter";
import { useProducts } from "./hooks/useProducts";
import { Footer } from './components/Footer';
import { Cart } from "./components/Cart";
import { CartProvider } from './context/cartProvider';

function App() {

  const { products } = useProducts();
	const { products: productsFiltered } = useFilter({ products })
  
  return (
    <CartProvider>
      <header>
        <Header />
        <Cart />
      </header>
      <main>
        <ProductList productsFiltered={ productsFiltered }/>
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
