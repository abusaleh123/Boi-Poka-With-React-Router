import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookName, image,author, category,rating, tags, bookId } = book
    console.log(book);
    return (
       <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto border p-6">
        <figure>
          <img className="w-full h-72 rounded-lg object-cover"
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-10 text-green-500 items-center justify-center">
          {
            tags.map((tag, idx) => <button key={idx} className="btn btn-xs text-green-500 font-bold bg-[#23BE0A]/5 my-auto px-4  ">{tag}</button> )
          }
          </div>
         
          <h2 className="card-title text-2xl">
            {bookName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="font-bold">By: {author}</p>
          <div className="border-t-2 border-dashed mb-6 mt-4"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating gap-2 text-xl">
            {rating}
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  
</div>
          </div>
        </div>
      </div>
       </Link>
    );
};

export default Book;