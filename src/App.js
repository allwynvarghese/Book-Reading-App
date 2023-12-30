import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App(){

    //books state system
    const [books, setBooks] = useState([]);

    //prop system for bookCreate
    const handleCreate = (title)=>{
        
        //updating books state which is an array
        const updatedBooks = [...books, { id: Math.floor(Math.random() * 9999), title }]
        
        setBooks(updatedBooks);
    }

    //prop system for bookDelete
    const handleDeleteById = (id)=>{

        //function to delete book from books array
        const updatedBooks = books.filter(book=>{
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    //function to edit book
    const handleEditById = (id, newTitle)=>{

        const updatedBooks = books.map(book=>{
            if(book.id === id){
                return {...book, title: newTitle};
            }

            return book;
        })

        setBooks(updatedBooks);
    }

    return(
        <div className="app">
            <h1 style={{textAlign: "center"}}>Book Reading List</h1>
            <BookList books={books} onDelete={handleDeleteById} onEdit={handleEditById}/>
            <BookCreate onCreate={handleCreate}/>
        </div>
    )
}

export default App;