import { useContext, useId } from 'react'
import { FiltersContext } from "../context/FiltersContext";
import { useCategories } from '../hooks/useCategories';

export const Filters = () => {

	const { minPrice, setMinPrice, setCategory } = useContext( FiltersContext )
	const { categories } = useCategories()

	const minPriceFilteredId = useId();
	const categoryFilteredId = useId();

	const handleChangeMinPrice = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		setMinPrice( Number(e.target.value) )
	}

	const handleChangeCategory = ( e: React.ChangeEvent<HTMLSelectElement> ) => {
		setCategory(e.target.value);
	}

	return (
		<div className="filters">
			<div>
				<label htmlFor={minPriceFilteredId}>Price from:</label>
				<input value={ minPrice } onChange={ handleChangeMinPrice } type="range" name="" id={ minPriceFilteredId } min={0} max={1000 }/>
				<span>${ minPrice }</span>
			</div>
			<div>
				<label htmlFor={categoryFilteredId}>Category</label>
				<select onChange={handleChangeCategory} name="" id={categoryFilteredId}>
					<option value="all">All</option>
					{
						categories.map((cat) => (
							<option key={cat} value={cat} style={{ textTransform: 'uppercase' }}>{cat}</option>
						))
					}
				</select>
			</div>
		</div>
	)
}
