import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BookSearchPage from './components/course/BookSearchPage';
// import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={CoursesPage} />
		<Route path="search" component={BookSearchPage} /> 
	</Route>
);