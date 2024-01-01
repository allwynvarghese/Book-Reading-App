import { useContext } from "react";
import BooksContext from "../context/books";

//custom books context hook
const  useBooksContext = ()=>{

    return useContext(BooksContext);

}

export default useBooksContext;