import { useCallback, useEffect, useState } from 'react'
import { IProduct } from "../interfaces/interfaces";
import { getProductsFromApi } from "../services/products";

export const useProducts = () => {

	const [products, setProducts] = useState<IProduct[] | []>([])
	
	const getProducts = useCallback( async () => {

		const data = await getProductsFromApi();

		setProducts(data)

	},[])
	
	useEffect(() => {
		
		if(products) getProducts();
		
	}, [])
	
	return {
		products
	}
}
