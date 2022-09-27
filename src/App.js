import { useState } from 'react';
import './App.css';


function App(props) {

	const [messegeList, setMessegeList] = useState([
		'Text',
		'Author'
	])


	return (
		<div className="App">
			<header className="App-header">
			</header>
			<body>
				<div className='info'>
					{
						messegeList.map(e => <div>{e}</div>)
					}
				</div>
				<div className='new-form'>
					<form action="">
						<textarea name="" id=""></textarea><br></br>
						<button className='form-btn'>OK</button>
					</form>

				</div>
			</body>
		</div>
	);
}

export default App;






