import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import SearchBar from './SearchBar';
import {browserHistory} from 'react-router';

class BookSearchPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state ={
			courses: Object.assign({}, this.props.courses)
		};

		this.searchBooks = this.searchBooks.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		debugger;
		if (this.props.courses.length != nextProps.courses.length) {
			//Necessary to populate form when existing course is loaded directly.
			this.setState({courses: Object.assign({}, nextProps.courses)});
		}
	}


	courseRow(course, index) {
		debugger;
		return <div key={index}>{course.title}</div>;
	}


	searchBooks(query) {
		let courses = this.state.courses;
		this.props.actions.searchCourse(query)
			.then(() => this.setState({courses:courses}));
		debugger;
		// return this.setState({courses:courses});

	}

	render() {
		debugger;
		const {courses} = this.props;
		return (
			<div>
				<h1>Books</h1>
				<SearchBar onSearchTermChange={this.searchBooks}  />
				<CourseList courses={courses}/>
			</div>
		);
	}
}

BookSearchPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
	
};

//Pull in the React Router context so router is available o this.context.router.
BookSearchPage.contextTypes = {
	router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	debugger;
	return {
		courses: state.courses //course reducer
	};
}

function mapDispatchToProps(dispatch) {
	debugger;
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchPage);