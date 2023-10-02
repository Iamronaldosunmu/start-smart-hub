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
            <div className="large:hidden">
              <img
                src="/src/assets/img1.png"
                alt="Bigger Image"
                className="max-w-full"
              />
              <div className="flex justify-end small:mr-10">
                <img
                  src="/src/assets/Doyin Adetona.png"
                  className="justify-center"
                  alt=""
                />
              </div>
              <img
                src="/src/assets/img2.png"
                alt="Smaller Image"
                className="absolute bottom-0 z-1 right-15 -mb-5  -mr-10 w-1/3 h-1/4 "
              />
            </div>
            <img
              src="/src/assets/DesktopHeroImage.png"
              hidden
              className="large:block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
