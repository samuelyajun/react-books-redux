import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BookListRow = ({book}) => {
	debugger;
	return (
		<tr>
			<td>{book.title}</td>
			<td>{book.author}</td>
			<td>{book.publication}</td>
			<td>{book.genre}</td>
			<td><a href={book.linkAddress}>{book.links}</a></td>
			
		</tr>
	);
};

BookListRow.propTypes = {
	book: PropTypes.object.isRequired
};

export default BookListRow;