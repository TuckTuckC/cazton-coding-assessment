import './App.css';
import Grid from './Grid/Grid';
import Error from './Error/Error';
import {useState, useEffect} from 'react';
import $ from 'jquery';

function App() {

	const [order, setOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [inputValue, setInputValue] = useState();
	const [hasFocus, setFocus] = useState(false);
	const [error, setError] = useState(null);
	const [isActive, setIsActive] = useState(false);

	const rearrange = () => {

		setIsActive(false);

		if (!inputValue) {
			setError('You must enter a sequence of numbers');
			setIsActive(true);
			return;
		}

		const newOrder = inputValue.split('').map(x => +x);
		
		if (newOrder.length !== 9) {
			setError('There must be exactly 9 numbers');
			setIsActive(true);
			return;
		} else if (newOrder.includes(NaN)) {
			setError('All characters must be a number');
			setIsActive(true);
			return;
		}else if (
			!newOrder.includes(1) || 
			!newOrder.includes(2) || 
			!newOrder.includes(3) || 
			!newOrder.includes(4) || 
			!newOrder.includes(5) || 
			!newOrder.includes(6) || 
			!newOrder.includes(7) || 
			!newOrder.includes(8) || 
			!newOrder.includes(9)
		) {
			setError('There must be no duplicates');
			setIsActive(true);
			return;
		}
		setOrder(newOrder);
	};

	const handleKeypress = e => {
		if (e.key === 'Enter') {
			rearrange()
		};
	};

  	return (
    	<div className="App">
			<Error isActive={isActive} error={error} />
			<Grid order = {order} />
			<btn className='child' onClick={() => rearrange()}>Re-Arrange</btn>
			<input 
				onKeyPress={handleKeypress} 
				onFocus={() => setFocus(true)} 
				onBlur={() => setFocus(false)} 
				className='child input' 
				id='input' 
				onChange={e => setInputValue(e.target.value)} 
				type="text" 
				placeholder='ex. 123456789' 
				minLength="9" 
				maxLength="9"
			></input>
    	</div>
  	);
};

export default App;
