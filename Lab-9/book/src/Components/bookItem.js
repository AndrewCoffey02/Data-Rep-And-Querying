import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
                <Button variant='danger'>Delete</Button>
                <Link to={ '/edit/'+props.myBook._id} className='btn btn-primary'>Edit</Link>
            </Card>
            
            
        </div>
    );
}

export default BookItem;