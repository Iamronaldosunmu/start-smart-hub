import "../../css/styles.css";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="flex lg:ml-6 items-center justify-center">
        <div className="flex flex-col justify-center items-center lg:items-start ">
          <h2 className="mb-1 md:text-xl lg:font-semibold">Our services</h2>
          <p className="lg:text-5xl md:text-2xl text-xl  text-center lg:text-left lg:font-bold font-semibold relative mb-6 quotation-marked">
            At StartSmart, we're all about your goals.
          </p>
          <p className="sm:text-lg text-center lg:text-left mb-6">
            At StartSmart, we are more than just your coaches; we’re your
            dedicated partners in success.{" "}
          </p>
        </div>
      </div>
      <div className="flex  items-center justify-center">
        <img src="/src/assets/group2.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
