interface ServiceProps {
  title: string;
  text: string;
  imageUrl: string;
  number: number;
}
const Service = ({ title, text, imageUrl, number }: ServiceProps) => {
  return (
    <div className=" p-20">
        <div className="border border-gray-500 mb-10"></div>
        <div className="text-gray-500 border inline p-2 px-5 mb-10 rounded-xl">{number}</div>
      <img src={imageUrl} className="mb-3 mt-7" alt="" />
      <div className="sm:flex ">
        <div className="sm:w-1/3">
          <h2 className="font-semibold text-5xl">{title}</h2>
        </div>
        <div className="sm:ml-10">
          <p className="mb-12">{text}</p>
          <button className="border border-gray-500 after:content-['_↗'] px-7 py-3 mt-4  rounded-3xl  text-gray-500 text-2xl hover:bg-gray-500 hover:text-white transition duration-300">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
