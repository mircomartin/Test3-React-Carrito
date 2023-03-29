import { useCallback, useEffect, useState } from "react";
import { getCategoriesFromApi } from "../services/products"

export const useCategories = () => {

	const [categories, setCategories] = useState<string[] | []>([])

	const getCategories = useCallback ( async () => {

		const newCategories = await getCategoriesFromApi();
		setCategories(newCategories);

	},[])

	useEffect(() => {
		
		if(categories) getCategories();

	}, [])
	
	return {
		categories
	}
}
