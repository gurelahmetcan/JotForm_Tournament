import React,{Component} from 'react';
import Data from './Data';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';

class App extends Component{
	render(){
		return(
		<div>	
			<NavBar/>
			<Homepage/>
			<Data/>
		</div>
	);
	}
}
export default App;