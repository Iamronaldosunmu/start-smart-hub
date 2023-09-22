const FormFooter = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm">
        <div className="flex">
          <img src="/src/assets/phone.png" className="mr-2 h-10 w-10 object-cover" alt="" />
          <div>
            <p>PHONE</p>
            <p className="text-custom-purple">03 5432 1234</p>
          </div>
        </div>
        <div className="flex">
          <img src="/src/assets/fax.png" className="mr-2 h-10 w-10 object-cover" alt="" />
          <div>
            <p>FAX</p>
            <p className="text-custom-purple">03 5432 1234</p>
          </div>
        </div>
        <div className="flex">
          <img src="/src/assets/mail.png" className="mr-2 h-10 w-10 object-cover" alt="" />
          <div>
            <p>EMAIL</p>
            <p className="text-custom-purple">info@marcc.com.au</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
