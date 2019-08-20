import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import ErrorIndicator from '../error-indicator';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';


class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }


  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
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

const mapStateToProps = ({books, loading, error}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
   fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);