import React, { Component } from 'react'
import './App.css';
import Hooks from './Components/Hooks';
import PracticeField from './Components/PracticeField';
// import {BrowseRouter,Router,Route,Link,NavLink,Switch} from 'react-router-dom';
import Home from './Home';
import NavBar from './Components/NavBar';
import AppjsPaginate from './Pagintaion/AppjsPaginate';

class App extends Component {
	render() {
		return (
<div className="App">
<NavBar name='navBars' number={4} />
<Home />
<hr/>
<AppjsPaginate/>
</div>
		);
	}
}

export default App;