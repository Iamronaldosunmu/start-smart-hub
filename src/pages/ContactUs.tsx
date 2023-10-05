import Form from "../components/ContactUs/Form/Form";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col mb-9 px-5">
        <h1 className="mb-5 text-4xl font-bold  mt-14 ">Contact Us</h1>
        <p className="text-center">
          Got any questions or thoughts? We're just a message away!
        </p>
      </div>
      <div className="grid lg:grid-cols-2 mb-20  ">
        <div className="lg:p-20 sm:p-10 p-5 ">
          <Form />
        </div>
        <div className="lg:hidden order-[-1] sm:px-10 ">
          <img
            src="/src/assets/map.png"
            className="w-full h-[300px] sm:h-[500px]  object-cover"
            alt=""
          />
        </div>
        <div className="hidden lg:block relative">
          
            <div className="flex items-center h-full justify-center  absolute right-1/4 z-10 ">
              <img
                src="/src/assets/map.png"
                className=" h-[500px] object-cover"
                alt=""
              />
            </div>
            <div className=" w-1/2 top-0 left-1/2 bottom-0 bg-custom-purple absolute hidden lg:block  "></div>
      
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
