import { createContext, useState, useCallback} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){

    //books state system
    const [books, setBooks] = useState([]);

    //show all books on 1st render with useEffect
    const fetchData = useCallback(async ()=>{
        const response = await axios.get('http://localhost:3002/books');
        setBooks(response.data);
    },[])

    //prop system for bookCreate
    const handleCreate = async (newTitle)=>{

        const response = await axios.post('http://localhost:3002/books', {
            title: newTitle
        })
        
        //updating books state which is an array
        const updatedBooks = [...books, response.data]
        
        setBooks(updatedBooks);
    }

    //prop system for bookDelete
    const handleDeleteById = async (id)=>{

        await axios.delete(`http://localhost:3002/books/${id}`);

        //function to delete book from books array
        const updatedBooks = books.filter(book=>{
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    //function to edit book
    const handleEditById = async (id, newTitle)=>{

        const response = await axios.put(`http://localhost:3002/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map(book=>{
            if(book.id === id){
                return {...book, ...response.data};
            }

            return book;
        })

        setBooks(updatedBooks);
    }

    return <BooksContext.Provider value={{ books, handleCreate, handleDeleteById, handleEditById, fetchData }}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;