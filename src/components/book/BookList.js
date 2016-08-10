import React, {PropTypes} from 'react';
import BookListRow from './BookListRow';

const BookList = ({books}) => {
	debugger;
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Publication</th>
					<th>Genre</th>
					<th>links</th>
				</tr>
			</thead>
			<tbody>
				{books.map(book => <BookListRow key={book.id} book={book}/>
				)}
			</tbody>
		</table>

	);
};

BookList.propTypes = {
	books: PropTypes.array.isRequired
};

export default BookList;