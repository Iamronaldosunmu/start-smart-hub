const Bookings = () => {
    return (
      <div className="flex justify-center items-center flex-col bg-red-100 ">
        <div className="text-center py-10 px-4">
          <div className="font-semibold text-3xl pb-5">Book a Discovery Call Today</div>
          <p className="text-gray-400 pb-5">Book a call with me today to see if we are a good match</p>
          <button className="border border-black px-6 py-2 text-sm rounded transition-colors hover:bg-black hover:text-white">Book a call</button>
        </div>
      </div>
    );
  }
  
  export default Bookings;
  