const GridComponent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[url('/src/assets/Section.png')] py-20 sm:flex flex-col justify-center items-center sm:px-10 px-5  large:px-20">
        <div className=" text-white flex flex-col justify-center items-center">
          <h2 className="sm:text-5xl text-3xl  my-10 font-semibold">
            Start smart and build bright today!
          </h2>
          <p className="text-gray-200 mb-10">
            We’re excited to be a part of your career story and can’t wait to
            assist you in reaching new heights! Let’s embark on this exciting
            journey together!
          </p>
        </div>
      </div>
      <div className="h-full hidden lg:block">
        <img
          src="/src/assets/img1.png"
          className="h-full w-full object-fill"
          alt=""
        />
      </div>
    </div>
  );
};

export default GridComponent;
