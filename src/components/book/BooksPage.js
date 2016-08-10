import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookList from './BookList';
import {browserHistory} from 'react-router';

class BooksPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		// this.redirectToAddBookPage = this.redirectToAddBookPage.bind(this);
	}


	bookRow(book, index) {
		debugger;
		return <div key={index}>{book.title}</div>;
	}


	render() {
		debugger;
		const {books} = this.props;
		return (
			<div>
				<h1>Books</h1>
				<BookList books={books}/>
			</div>
		);
	}
}

BooksPage.propTypes = {
	books: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
	
};

function mapStateToProps(state, ownProps) {
	debugger;
	return {
		books: state.books //book reducer
	};
}

function mapDispatchToProps(dispatch) {
	debugger;
	return {
		actions: bindActionCreators(bookActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);