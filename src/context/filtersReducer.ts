import { FiltersState } from "./FiltersProvider";

type FiltersActionType =
| { type: 'Filters - SetMinPrice', payload: number }
| { type: 'Filters - SetCategory', payload: string }

export const filtersReducer = ( state: FiltersState, action: FiltersActionType ): FiltersState => {

	switch (action.type) {
		case 'Filters - SetMinPrice':
			return {
				...state,
				minPrice: action.payload
			}
		case 'Filters - SetCategory':
			return {
				...state,
				category: action.payload
			}
		default:
				return state;
	}

}