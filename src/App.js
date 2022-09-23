import './App.css';

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<div className='cart'>
					<h3>Hello {props.name}</h3>
				</div>
				<div></div>
			</header>
		</div>
	);
}

export default App;
