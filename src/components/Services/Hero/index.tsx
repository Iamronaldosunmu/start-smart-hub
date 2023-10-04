const Hero = () => {
  return (
    <div className="p-5 large:p-20">
      <div className="grid grid-cols-1 large:grid-cols-2 pb-10">
        <div className="flex items-center">
          <div className="ml-5 mb-10 sm:ml-0  flex flex-col ">
            <div className="flex flex-col  mb-5  font-semibold text-2xl large:text-6xl">
              <span className="text-center large:text-left md:inline">
                How to start?
              </span>

              <span className="text-center large:text-left md:inline">
                We'll show you how
              </span>
            </div>
            <p className=" justify-center text-center large:text-left sm:text-lg text-xs text-gray-700">
              At StartSmart, we are more than just your coaches; we're your
              dedicated partners in success
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative sm:ml-10">
            <img src="/src/assets/group2.png" className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
