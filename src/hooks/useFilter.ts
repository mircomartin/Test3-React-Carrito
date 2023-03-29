import { useContext, useMemo } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { IProduct } from "../interfaces/interfaces";

export const useFilter = ({ products }: { products: IProduct[] } ) => {

	const { category, minPrice } = useContext( FiltersContext )

	const filterProducts = useMemo(() => {
		return products.filter((product) => { 
			if(product.price >= minPrice) {
				if (category === 'all'){
					return category
				} else {
					return product.category === category
				} 
			}
		})
	}, [ category, minPrice, products ]);

	return {
		products: filterProducts,
	}
}
