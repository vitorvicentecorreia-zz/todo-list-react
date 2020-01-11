import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

//Pages
import TaskList from './pages/TaskList'
import NewTask from './pages/NewTask'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
	${reset}
	body{
		font-family: 'Montserrat', sans-serif;
	}
  /* other styles */
`

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={TaskList} />
				<Route path="/new-task" component={NewTask} />
			</Switch>
		</Router>
	);
}

export default App;
