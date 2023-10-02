import BillingCard from "./BillingCard";
import Toggle from "../Toggle/Toggle"
import "../Toggle/Toggle.css"


const Billing = () => {


  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-5xl text-center font-semibold mb-12 ">Our Pricing</h1>

        <div className="text-gray-500 sm:text-sm text-xs flex items-center">
            <span className="sm:mr-2 mr-1">Billed Monthly</span>
              <Toggle/>            
            <span className="sm:ml-2 ml-1 colored-text">Billed yearly (save 15%)</span> 
        </div>

      </div>
      <div className="lg:grid grid-cols-2 lg:p-20 pt-10">
        <BillingCard
          description="Description of the tier list will go here, copy should be concise and impactful."
          type="Free"
          price={0}
        />
        <BillingCard
          description="Description of the tier list will go here, copy should be concise and impactful."
          type="Pro"
          price={12}
          proText="Delightful feature five"
        />
      </div>
    </div>
  );
};

export default Billing;
