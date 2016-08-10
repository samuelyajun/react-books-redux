import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookList from './BookList';
import SearchBar from './SearchBar';
import {browserHistory} from 'react-router';

class BookSearchPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state ={
			books: Object.assign({}, this.props.books)
		};

		this.searchBooks = this.searchBooks.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		debugger;
		if (this.props.books.length != nextProps.books.length) {
			//Necessary to populate form when existing book is loaded directly.
			this.setState({books: Object.assign({}, nextProps.books)});
		}
	}


	bookRow(book, index) {
		debugger;
		return <div key={index}>{book.title}</div>;
	}


	searchBooks(query) {
		let books = this.state.books;
		this.props.actions.searchBook(query)
			.then(() => this.setState({books:books}));
		debugger;
		// return this.setState({books:books});

	}

	render() {
		debugger;
		const {books} = this.props;
		return (
			<div>
				<h1>Books</h1>
				<SearchBar onSearchTermChange={this.searchBooks}  />
				<BookList books={books}/>
			</div>
		);
	}
}

BookSearchPage.propTypes = {
	books: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
	
};

//Pull in the React Router context so router is available o this.context.router.
BookSearchPage.contextTypes = {
	router: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchPage);