import { createContext } from 'react';

interface ContextProps {
	category: string;
	minPrice: number;

	setMinPrice: (minPrice: number) => void;
	setCategory: (category: string) => void;
}

export const FiltersContext = createContext({} as ContextProps )