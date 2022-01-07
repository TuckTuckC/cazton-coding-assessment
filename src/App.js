import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './Grid/Grid';
import {useState, setState} from 'react';

function App() {

	const [order, setOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

	const [inputValue, setInputValue] = useState();

	const rearrange = () => {
		const newOrder = inputValue.split('').map(x => +x);
		setOrder(newOrder);
	};

  	return (
    	<div className="App">
			<Grid order = {order} />
			<btn className='btn-primary' onClick={() => rearrange()}>Re-Arrange</btn>
			<input id='input' onChange={e => setInputValue(e.target.value)} type="text" placeholder='ex. 123456789' minLength="9" maxLength="9"></input>
    	</div>
  	);
};

export default App;
