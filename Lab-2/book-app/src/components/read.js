import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Book";

function Read() 
{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonblob.com/api/jsonblob/1161593332966481920")
        .then( 
            (response) => {
                setData(response.data.Book)
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    }, []
    );

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Books myBook={data}></Books>
        </div>
    );

}

export default Read;