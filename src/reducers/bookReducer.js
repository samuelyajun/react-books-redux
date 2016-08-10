import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bookReducer(state = initialState.books, action) {
	debugger;
	switch(action.type) {
		case types.LOAD_BOOKS_SUCCESS: 
			//debugger;
			return action.books;

		case types.SEARCH_BOOK_SUCCESS:
			return action.books;	

		default:
			return state;
	}
}
