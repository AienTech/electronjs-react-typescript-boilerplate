import * as React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { iRoute } from '../../config';

class LinkButton extends React.Component<iRoute> {
	render() {
		const { path, title } = this.props;
		return (
			<Link className={'bp3-button bp3-minimal'} to={path}>
				{title}
			</Link>
		);
	}
}

export default LinkButton;
