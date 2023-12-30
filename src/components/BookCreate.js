import { useState } from "react";

function BookCreate({onCreate}){

    //State system to handle book creation
    const [title, setTitle] = useState('');

    //Event handler for onChange
    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    //Eent handler for handleSubmit
    const handleSubmit = (event)=>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return(
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" onChange={handleChange} value={title}></input>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;