import ContactUsFooter from "../components/ContactUs/Footer/ContactUsFooter";
import Form from "../components/ContactUs/Form/Form";

const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-9">
        <h1 className="mb-5 text-4xl font-bold text-custom-purple">Contact Us</h1>
        <p>Got any questions or thoughts? We're just a message away!</p>
      </div>
      <div className="grid grid-cols-2 mb-20">
        <Form />
        {/* <div className="flex">
          <div className="flex justify-center w-2/3 items-center">
            <img
              src="/src/assets/map.png"
              className="h-2/3 flex w-full object-cover"
              alt=""
            />  
          </div>
          <div className="flex  w-2/3 h-full bg-custom-purple"></div>
        </div> */}
        <div className="flex">
  <div className="flex justify-center w-2/3 h-full items-center">
    <img
      src="/src/assets/map.png"
      className="h-2/3 w-full object-cover"
      alt=""
    />
  </div>
  <div className="flex w-2/3 h-full bg-custom-purple"></div>
</div>

      </div>
      <ContactUsFooter/>
    </div>
  );
};

export default ContactUs;
