import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTiltle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
       e.preventDefault();
       if(!title || !desc){
        alert("Title and Description cannot be blank");
       }
       else{
       props.addTodo(title,desc);
       setTiltle("");
       setDesc("");
       }
    }
    return (
        <div className="container my-3">
            <h3>Add a todo</h3>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTiltle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
