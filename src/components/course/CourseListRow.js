import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
	debugger;
	return (
		<tr>
			<td>{course.title}</td>
			<td>{course.author}</td>
			<td>{course.publication}</td>
			<td>{course.genre}</td>
			<td><a href={course.linkAddress}>{course.links}</a></td>
			
		</tr>
	);
};

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
};

export default CourseListRow;