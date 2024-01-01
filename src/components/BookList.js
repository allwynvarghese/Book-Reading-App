import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";

function BookList(){

    //from books context
    const { books } = useContext(BooksContext);

    //mapping an array of books context into booklist via props
    const renderedBooks = books.map(book=>{
        return <BookShow book={book} key={book.id}/>
    });

    return(
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;