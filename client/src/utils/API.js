/*Imports section, do not touch*/  
import axios from 'axios';

/*This constant controlls the amount of books or results we want to show up
const LIMIT = "&maxResults=20";*/

export const searchGoogleBooks = title => {
  return axios.get('https://www.googleapis.com/books/v1/volumes' + title); 
};

export const fetchSavedBooks = () => {
  return axios.get("/api/books");
};

export const saveBook = (bookData) => {
  return axios.post("/api/books" + bookData);
};

export const deleteBook = id => {
  return axios.delete("/api/books/" + id);
};


export default {
  saveBook,
  fetchSavedBooks,
  deleteBook,
  searchGoogleBooks
};
