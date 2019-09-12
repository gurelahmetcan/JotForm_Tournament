import React,{Component} from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button'
class Homepage extends Component{

	render(){
		return(
			<div id="homepage">
				<h1 className="title" >Welcome to JotForm Tournament App</h1>
			</div>
		);
	}
}
export default Homepage;
			//	<div className="centered">
			//		<Button className="button" href={"https://form.jotform.com/" + this.props.State.selectedId} variant="outline-warning" size="lg" target="_blank">Register</Button>
			//	</div>