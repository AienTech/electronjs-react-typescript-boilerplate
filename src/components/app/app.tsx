import * as React from 'react';
import { Home, Servers } from '../../pages';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { LinkButton } from '../link-button';
import { routes } from '../../config';
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

class App extends React.Component<React.ComponentType> {
	render() {
		return (
			<Router>
				<div className="noselect">
					<Navbar>
						<NavbarGroup>
							<NavbarHeading>ServerMan</NavbarHeading>
							<NavbarDivider />
							<LinkButton {...routes.HOME} />
						</NavbarGroup>
					</Navbar>

					<div className="app">
						<Route path={routes.HOME.path} exact component={Home} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
