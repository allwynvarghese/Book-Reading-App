import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext-hook";

function BookShow({ book }){

    //getting functions from books context
    const { handleDeleteById, handleEditById } = useBooksContext();

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = ()=>{
        handleDeleteById(book.id);
    }

    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }

    const onSubmit = ()=>{
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit key={book.id} book={book} onSubmit={onSubmit}/>
    }

    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200`} alt="book cover"></img>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}></button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;