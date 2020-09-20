import React , { Component } from "react"
import Cardlist from'../components/Cardlist';
import SearchBox from'../components/SearchBox';
import ErrorBoundary from'../components/ErrorBoundary';
import './App.css';
import Scroll from '../components/Scroll';
import  { searchRobots, requestRobots } from '../reducers.js';
import { setSearchField, setRequestrobots } from '../actions.js';
import { connect } from 'react-redux';


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) =>
			dispatch( setSearchField ( event.target.value ) ),
		onRequestrobots: () =>
			dispatch( setRequestrobots() )
	}
}
class  App extends Component{
componentDidMount(){
	this.props.onRequestrobots();
}
render(){
		const {searchField, onSearchChange, robots, isPending, error}=this.props;
		const filteredRobots=robots.filter(robot=>{ return(
			robot.name.toLowerCase().includes(searchField.toLowerCase())
			);
		});
		return(
			isPending ?
			<h1> Loading</h1>
			:
			<div className="tc">
			<h1 className="f1"> Robo Friends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
			 <ErrorBoundary>
			      <Cardlist robots= {filteredRobots}/>
			 </ErrorBoundary>
			</Scroll>
			</div>
		);
	}		
}
export default connect( mapStateToProps , mapDispatchToProps )( App );