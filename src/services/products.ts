const END_POINT_PRODUCTS = '/src/mocks/products.json';
const END_POINT_CATEGORIES = 'https://dummyjson.com/products/categories';

export const getProductsFromApi =  async () => {

	try {

		const response = await fetch(END_POINT_PRODUCTS);
		const data = await response.json();
		return data.products;

	} catch (error) {
		throw new Error("Error al cargar productos");
	}

}

export const getCategoriesFromApi = async () => {

	try {

		const response = await fetch(END_POINT_CATEGORIES);
		const data = await response.json();
		return data;

	} catch (error) {
		throw new Error("Error al cargar categorias");
	}

}