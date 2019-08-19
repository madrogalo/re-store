import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
 
import { booksLoaded, booksRequested } from '../../actions';

import './book-list.css';


class BookList extends Component {

  componentDidMount( ) {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }


  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner />
    }
    return (

        <ul>
          {books.map((book) => {
            return(
              <li className="book-list" key={book.id}>
                <BookListItem book={book} />
              </li>
            )
          })
         }
        </ul>
      )
    }
};

const mapStateToProps = ({books, loading}) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));