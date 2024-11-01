import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 w-full px-12 py-12 rounded-  h-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-6xl mb-10  leading-snug font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn text-white text-lg font-bold bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;