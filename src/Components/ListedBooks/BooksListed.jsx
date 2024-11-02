import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/AddToDB';
import Book from '../Book/Book';
import { getStoredWishList } from '../Utility-2/AddToWL';

const BooksListed = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList ] = useState([])
    const allBooks = useLoaderData();
   
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBooks(readBookList)

    },[])
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const wishListInt = storedWishList.map(id =>  parseInt(id));
        const WishBookList = allBooks.filter(book => wishListInt.includes(book.bookId));
        setWishList(WishBookList)
      },[])
    return (
        <div>
            <h2 className="text-2xl">Listed Books</h2>
             <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I Read : {readBooks.length} </h2>
      {
        readBooks.map(book => <Book key={book.bookId} book = {book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Wish List : {wishList.length}</h2>
      {
        wishList.map(book => <Book key={book.bookId} book = {book}></Book>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default BooksListed;