interface ServiceProps {
  title: string;
  text: string;
  imageUrl: string;
  number: number;
}
const Service = ({ title, text, imageUrl, number }: ServiceProps) => {
  return (
    <div className="lg:px-10 font-poppins">
      <div className="border border-gray-300 mb-7 mt-8 lg:mb-10"></div>
        <div className="text-gray-500 border inline p-2 px-5 mb-10 text-2xl rounded-xl">
          {`${number > 9 ? "" : "0"}${number}`}
        </div>
      <img src={imageUrl} className="mb-3 mt-7" alt="" />
      <div className="lg:flex justify-center lg:mt-5">
        <div className="w-full">
          <h2 className="xl:text-5xl sm:text-4xl text-[28px] font-medium mb-5 w-full">
            {title}
          </h2>
        </div>
        <div className="lg:ml-20 max-w-[605px]">
          <p className="lg:leading-7 mb-6 max-w-[800px] text-[#575252]">{text}</p>
          <button className="border border-gray-500 after:content-['_↗'] md:px-7 md:py-3 mt-4 px-5 py-2 rounded-3xl text-gray-500 md:text-xl text-base hover:bg-gray-500 hover:text-white transition duration-300">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;