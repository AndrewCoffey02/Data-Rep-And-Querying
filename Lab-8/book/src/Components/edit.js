import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function edit() {

    //create the arrays for adding the books 
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [cover, setCover] = useState([]);

    let{id} = useParams();

    useEffect( () => {
        axios.get("http://localhost:4000/api/books/"+id)
        .then((response)=> {
            setTitle(response.data.title);
            setCover(response.data.cover);
            setAuthor(response.data.author);
        }) 
        .catch( (error) => {console.log(error)});
    })

    const handlesubmit = (e)=>{
        e.preventDefault();

        //book object
        const book = {
            _id:id,
            title:title,
            cover:cover,
            author:author
        }

    axios.put("http://localhost:4000/api/books/"+id)
        .then((res=> {
            console.log(res.data);
            Navigate("/read");
        }));
    }

    return(
        <div>{/* adding new books */}
            <form onSubmit={handlesubmit}>{/* add a form */}
            <div className="form-group">{/* add a new book title */}
                <label>Edit Book Title: </label>
                <input type="text"
                className="form-control"
                value={title}/* initial value */
                onChange={(e) => { setTitle(e.target.value) }}/>{/* when event changes run setTitle */}
            </div>

            <div className="form-group">{/* add a new book author */}
                <label>Edit Book Author: </label>
                <input type="text"
                className="form-control"
                value={author}/* initial value */
                onChange={(e) => { setAuthor(e.target.value) }}/>{/* when event changes run setAuthor */}
            </div>

            <div className="form-group">{/* add a new cover image */}
                <label>Add Cover URL: </label>
                <input type="text"
                className="form-control"
                value={cover}/* initial value */
                onChange={(e) => { setCover(e.target.value) }}/>{/* when event changes run setCover */}
            </div>
            
            <div>{/* submit button */}
                <input type="submit"
                value="Add Book"></input>
            </div>
            </form>
        </div>
    );
}