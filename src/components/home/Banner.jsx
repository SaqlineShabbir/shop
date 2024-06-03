const Banner = () => {
  return (
    <div className="  min-h-[80vh] bg-gradient-to-b  py-10 flex justify-center items-center overflow-hidden">
      <img
        className=" "
        src="https://via.placeholder.com/800x400"
        alt="Summer Sale"
      />
      <div className=" bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center ">
        <h2 className="text-4xl font-bold mb-2">Summer Sale!</h2>
        <p className="text-lg mb-4">Get your summer essentials now!</p>
        <button className="bg-orange-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
