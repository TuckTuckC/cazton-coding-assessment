import './App.css';
import Grid from './Grid/Grid';
import {useState} from 'react';

function App() {

	const [order, setOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

	const [inputValue, setInputValue] = useState();

	const rearrange = () => {
		const newOrder = inputValue.split('').map(x => +x);
		
		if (
			newOrder.length !== 9 || 
			newOrder.includes(NaN) || 
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
			console.log('ERROR');
			return;
		}
		setOrder(newOrder);
	};

  	return (
    	<div className="App">
			<Grid order = {order} />
			<btn className='child' onClick={() => rearrange()}>Re-Arrange</btn>
			<input className='child' id='input' onChange={e => setInputValue(e.target.value)} type="text" placeholder='ex. 123456789' minLength="9" maxLength="9"></input>
    	</div>
  	);
};

export default App;
