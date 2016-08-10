import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		// this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}


	courseRow(course, index) {
		debugger;
		return <div key={index}>{course.title}</div>;
	}

	// redirectToAddCoursePage() {
	// 	debugger;
	// 	browserHistory.push('/course');
	// }

	render() {
		debugger;
		const {courses} = this.props;
		return (
			<div>
				<h1>Books</h1>
				<CourseList courses={courses}/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
	
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);