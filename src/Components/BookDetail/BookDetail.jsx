import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/AddToDB";
import { addToStoredWishlist } from "../Utility-2/AddToWL";



const BookDetail = () => {
const {bookId} = useParams();
const id = parseInt(bookId)
const data = useLoaderData();
const book = data.find(book => book.bookId === id)

const {bookId: currentBookId, image, bookName, author,category, review, tags} = book;

const handleMrkAsRead = (id) => {
    addToStoredReadList(id)
}
const handleMrkAsWishList = (id) => {
   addToStoredWishlist(id)
}

    return (
        <div className="hero bg-base-200 flex gap-6 ">
        <div className="hero-content flex-col gap-12 lg:flex-row">
         
         <img 
            src={image}
            className=" w-72 ml-20  rounded-lg shadow-2xl" />
      
          <div className="">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="text-lg mt-2">By: {author}</p>
            <p className="border-t-2 mt-4"></p>
        <p className="text-lg mt-4">{category}</p>
            <p className="border-t-2 mt-4"></p>
            <p className="py-6">
             Review: {review}
            </p>
            <div className="flex gap-10 text-green-500  mb-6">
                <p className="text-black">Tag: </p>
          {
            tags.map((tag, idx) => <button key={idx} className="btn btn-xs text-green-500 font-bold bg-[#23BE0A]/5 my-auto px-4  ">{tag}</button> )
          }
          </div>
          <button onClick={ () => handleMrkAsRead(bookId)} className="btn btn-outline  mr-4">Mark As Read </button>
          <button onClick={() => handleMrkAsWishList(bookId)} className="btn btn-accent "> Add To Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetail;