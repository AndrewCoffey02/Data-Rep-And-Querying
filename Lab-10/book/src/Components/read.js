//plugins
import { useEffect, useState } from 'react';
import axios from "axios";
import Books from './books';

function Read(){

    // create the data and setData methods to use below to display the books array
    const [data, setData] = useState([]);

    useEffect(
        ()=>{
            // Get the data from the http link
            axios.get('http://localhost:4000/api/books')
            .then(// callback function
                (response)=>{// get the data response from the http 
                    setData(response.data)// pass the data to setData to display the books array 
                }
            )
            .catch(// display the error in the console if there is one 
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );
    //reload the page
    const Reload = (e) => {
        axios.get('http://localhost:4000/api/books')
        .then(
            (response) => {//callback function
            setData(response.data);
        })
        .catch(//callback error
            (error) => {
            console.log(error);
        });
    };

    return(
        <div>
            <Books myBooks = {data} reloadData={Reload}></Books>
        </div>
    );
}

export default Read;