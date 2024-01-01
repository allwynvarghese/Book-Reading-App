import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext-hook";

function BookEdit({ book, onSubmit }){

    //handleEcit function from books context
    const { handleEditById } = useBooksContext();

    //edit function from book context

    const [title , setTitle] = useState(book.title);

    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit();
        handleEditById(book.id, title);
    }

    return(
        <div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button is-primary">Submit</button>
            </form>
        </div>
    )
}

export default BookEdit;