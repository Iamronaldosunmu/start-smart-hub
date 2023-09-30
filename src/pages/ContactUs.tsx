import ContactUsFooter from "../components/ContactUs/Footer/ContactUsFooter";
import Form from "../components/ContactUs/Form/Form";

const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-9">
        <h1 className="mb-5 text-4xl font-bold text-custom-purple">
          Contact Us
        </h1>
        <p>Got any questions or thoughts? We're just a message away!</p>
      </div>
      <div className="grid grid-cols-2 mb-20">
        <Form />
        <div className="flex relative">
          <div className="absolute top-0 bottom-1/4 right-1/3 z-10">
            <img
              src="/src/assets/map.png"
              className="h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex w-1/2 top-0 left-1/2 bottom-0 bg-custom-purple absolute right-0 "></div>
        </div>
      </div>
      <ContactUsFooter />
    </div>
  );
};

export default ContactUs;
