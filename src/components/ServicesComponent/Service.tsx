interface ServiceProps {
  title: string;
  text: string;
  imageUrl: string;
  number: number;
}
const Service = ({ title, text, imageUrl, number }: ServiceProps) => {
  return (
    <div className="lg:px-10">
      <div className="border border-gray-300 border- mb-3  mt-8 lg:mb-10"></div>
      <div className="text-gray-500 border inline p-2 px-5 mb-10  rounded-xl">
        {number}
      </div>
      <img src={imageUrl} className="mb-3 mt-7" alt="" />
      <div className="lg:flex ">
        <div className="lg:w-1/3">
          <h2 className=" lg:text-5xl sm:text-4xl text-3xl mb-5 w-full">
            {title}
          </h2>
        </div>
        <div className="lg:ml-20">
          <p className="lg:mb-12  mb-6 max-w-[800px]">{text}</p>
          <button className="border border-gray-500 after:content-['_↗'] md:px-7 md:py-3 mt-4   px-5 py-2 rounded-3xl  text-gray-500 md:text-2xl text-xl hover:bg-gray-500 hover:text-white transition duration-300">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
