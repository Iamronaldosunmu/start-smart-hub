import "../../css/styles.css";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex lg:ml-6 items-center justify-center">
        <div className="flex flex-col justify-center items-center lg:items-start ">
          <h2 className="mb-1 md:text-xl font-medium">Our services</h2>
          <p className="lg:text-5xl md:text-2xl text-xl text-center lg:text-left lg:font-bold font-semibold relative mb-6 quotation-marked">
            At StartSmart, we're all about your goals.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-center lg:text-left mb-6 text-[#606060]">
           No matter what stage you are in your career, I’ve got the strategy to help you unlock that next level of success.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="/src/assets/group2.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
