import { IProduct } from "../interfaces/interfaces";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productsFiltered }: { productsFiltered: IProduct[] }) => {

	return (
		<div className="products">
			<ul>
				{
					productsFiltered.map((product) => (
						<ProductCard key={ product.id } product={ product }/>
					))
				}
			</ul>
		</div>
	)
}
