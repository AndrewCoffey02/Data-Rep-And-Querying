import BookItem from "./BookItem";

function Book(props){

    return props.myBook.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );

}

export default Book;