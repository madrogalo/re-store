import React, { Fragment } from 'react';
import './book-list-item.css';

const BookListItem = ({ books }) => {
  const { title, author } = books;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
    )
};

export default BookListItem;