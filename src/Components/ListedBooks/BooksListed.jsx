import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/AddToDB";
import Book from "../Book/Book";
import { getStoredWishList } from "../Utility-2/AddToWL";

const BooksListed = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort ] = useState('')
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadBooks(readBookList);
  }, []);
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const wishListInt = storedWishList.map((id) => parseInt(id));
    const WishBookList = allBooks.filter((book) =>
      wishListInt.includes(book.bookId)
    );
    setWishList(WishBookList);
  }, []);

  const handleSort = sortType => {
    setSort(sortType);

   if(sortType === 'No Of Pages'){
    const sortedReadList = [...readBooks].sort((a, b) => b.totalPages -  a.totalPages );
    setReadBooks(sortedReadList)
   };
   if(sortType === 'Ratings'){
    const sortedReadList = [...readBooks].sort((a, b) => b.rating -  a.rating );
    setReadBooks(sortedReadList)
   };
  };



  return (
    <div>
      <h2 className="text-2xl">Listed Books</h2>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort By: ${sort}`: 'Sort By'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort('Ratings')}>
            <a>Rating</a>
          </li >
          <li onClick={() => handleSort('No Of Pages')}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I Read : {readBooks.length} </h2>
          {readBooks.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish List : {wishList.length}</h2>
          {wishList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksListed;
