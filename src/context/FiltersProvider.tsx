import { useReducer } from 'react';
import { FiltersContext } from "./FiltersContext";
import { filtersReducer } from "./filtersReducer";

export interface FiltersState {
	category: string;
	minPrice: number;
}

const Filters_INITIAL_STATE: FiltersState = {
	category: 'all',
	minPrice: 0,
}

export const FiltersProvider = ( { children }: { children: JSX.Element | JSX.Element[] } ) => {

const [state, dispatch] = useReducer(filtersReducer , Filters_INITIAL_STATE)

	const setMinPrice = ( minPrice: number ) => {
		dispatch({
			type: 'Filters - SetMinPrice',
			payload: minPrice
		})
	}
	const setCategory = ( category: string ) => {
		dispatch({
			type: 'Filters - SetCategory',
			payload: category
		})
	}

	return (
		<FiltersContext.Provider value={{
			...state,

			setMinPrice,
			setCategory
		}}>
			{ children }
		</FiltersContext.Provider>
	)
}