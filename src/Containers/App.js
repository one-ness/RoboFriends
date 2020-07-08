import React, {Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import '../Style/App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(robots => this.setState({robots:robots}));
	}
	render() {
		const {robots, searchField} = this.state;
		console.log(robots);
		if(!robots.length) {
			return <h1 className='f1 fw2 ma0'>Loading</h1>
		} else {
			const filteredRobots = robots.filter(robot => robot.username.toLowerCase().includes(searchField.toLowerCase()));;
			return(
				<>
					<h1 className='f1 tc mv2 light-green fw2'>RoboFriends</h1>
					<div className='tc'>
						<SearchBox searchChange={this.onSearchChange}/>
					</div>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</>
			);
		}
	}
};

export default App;