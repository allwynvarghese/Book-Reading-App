import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/useBooksContext-hook";

function App(){

    //from custom hook
    const { fetchData } = useBooksContext();

    useEffect(()=>{
        fetchData();
    }, [fetchData])

    return(
        <div className="app">
            <h1 style={{textAlign: "center"}}>Book Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}

export default App;