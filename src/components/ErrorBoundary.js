import React,{Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError:false
		}
	}
	componentDidCatch(error,info){
	return	this.setState({hasError:true});
	}

	render(){
		return( this.state.hasError ? 
			<h1> oops, Don't look at me, I'm only rendering</h1>
			:
			this.props.children
		);	
	}
}
export default ErrorBoundary;