import { useState } from "react";

function Create(){

    // create arrays for cards
    const [author, setAuthor] = useState([]);
    const [title, setTitle ] = useState([]);
    const [Url, setUrl] = useState([]);

    return(
        //add new books
        <div>
            <h2>Hello from create Component!</h2>
            <div classname="form-group">
                <label>Add Book Author: </label>
                <input type="text"
                    className="form-control"
                    value={author} 
                    onChange={((e) => {setAuthor(e.target.value)}
                    )}
                />  
                {/* add new book author   */}
            </div>
            <div classname="form-group">
            <label>Add Book Title: </label>
                <input type="text"
                    className="form-control"
                    value={title} 
                    onChange={((e) => {setTitle(e.target.value)}
                    )}
                />
                {/* add new book image */}
            </div>
            <div classname="form-group">
            <label>Add Front Page URL: </label>
                <input type="text"
                    className="form-control"
                    value={Url} 
                    onChange={((e) => {setUrl(e.target.value)}
                    )}
                />
            </div>
            <input type="submit"
            value="Add Book"
            />
            
                
        </div>
    );

}
export default Create;