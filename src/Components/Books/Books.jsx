import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./bookdata.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="w-full ">
            <h2 className="text-5xl font-bold text-center">Books</h2>
            <p>{books.length}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 ">
                {
                    books.map(book => <Book key={books.bookId} book = {book}></Book> )
                }
            </div>
        </div>
    );
};

export default Books;