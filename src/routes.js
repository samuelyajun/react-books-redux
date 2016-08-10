import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BookSearchPage from './components/book/BookSearchPage';
// import AboutPage from './components/about/AboutPage';
import BooksPage from './components/book/BooksPage';
// import ManageBookPage from './components/book/ManageBookPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={BooksPage} />
		<Route path="search" component={BookSearchPage} /> 
	</Route>
);