import React,{Component} from 'react';
import '../App.css'

class Logo extends Component{
	render(){
		return(
		<header >
			<img className="logo" src="https://www.jotform.com/resources/assets/logo/jotform-logo-transparent-400x100.png" alt="JotForm Logo"></img>
		</header>
	);
	}
}
export default Logo;