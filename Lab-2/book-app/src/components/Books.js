import BookItem from "./BookItem";

function Books(props){

    return props.myBook.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );

}

export default Books;