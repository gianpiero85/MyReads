import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import Books from './Books';
import Header from './Header';
import Footer from './Footer';



class MainPage extends Component{
  render(){

    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books
                    .filter(book => book.shelf  ===
                    "currentlyReading")
                      .map(book => (
                        <li key={book.id}>
                         <Books
                             book={book}
                             moveShelf={this.props.moveShelf}
                             currentShelf="currentlyReading"
                          />
                        </li>
                      ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books
                    .filter(book => book.shelf  ===
                      "wantToRead")
                      .map(book => (
                        <li key={book.id}>
                         <Books
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="wantToRead"
                          />
                        </li>
                      ))
                  }
               </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books
                    .filter(book => book.shelf  ===
                      "read")
                      .map(book => (
                        <li key={book.id}>
                         <Books
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="read"
                          />
                        </li>
                      ))
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div className="open-search">
          <Link
            to="/search"
            >Add a book</Link>
        </div>
      </div>
    );
  }

  }



export default MainPage;
