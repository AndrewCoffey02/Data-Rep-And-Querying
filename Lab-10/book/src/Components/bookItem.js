import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function BookItem(props){
    return(
        <div>
            <Card>
                {/* add and display the title, image, and author */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author}
                        </footer>
                        
                    </blockquote>
                </Card.Body>
                {/* Added delete button to delete selected book */}
                <Button variant='danger' onClick={
                    (e)=> {
                        e.preventDefault();

                        axios.delete('http://localhost:4000/api/book/'+props.myBook._id)
                        .then((res)=>{
                            //reloads the page 
                            let reload = props.Reload();
                        })
                        .catch();
                    }
                }>Delete</Button>   
                <Link to={ '/edit/'+props.myBook._id} className='btn btn-primary'>Edit</Link>
            </Card>
        </div>
    );
}

export default BookItem;