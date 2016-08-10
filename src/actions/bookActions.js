import * as types from './actionTypes';
import bookApi from '../api/mockBookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadBooksSuccess(books) {
	debugger;
	return {type: types.LOAD_BOOKS_SUCCESS, books};
}



export function searchBookSuccess(books) {
	return {type: types.SEARCH_BOOK_SUCCESS, books};
}

export function loadBooks() {
	debugger;
	return function(dispatch) {
		debugger;
		dispatch(beginAjaxCall());
		return bookApi.getAllBooks().then(books => {
			dispatch(loadBooksSuccess(books));
		}).catch(error => {
			throw(error);
		});
	};
}



export function searchBook(query) {
	return function(dispatch, getState) {
		dispatch(beginAjaxCall());
		debugger;
		return bookApi.searchBook(query).then(foundBooks => {
				dispatch(searchBookSuccess(foundBooks));
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw(error);
		});
	};
}