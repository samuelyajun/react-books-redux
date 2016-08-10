import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
	debugger;
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/search" activeClassName="active">Search</Link>
			{loading && <LoadingDots interval={1000} dots={20}/>}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;