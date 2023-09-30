import { Switch } from "@chakra-ui/react";
import BillingCard from "./BillingCard";



const Billing = () => {

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-semibold mb-12">Our Pricing</h1>
        <div className="text-gray-500 text-sm">
            <span className="mr-2">Billed Monthly</span>
            <Switch size={"lg" } colorScheme="purple"/>
            <span className="ml-2">Billed yearly (save 15%)</span> 
        </div>

      </div>
      <div className="grid grid-cols-2 p-20 pt-10">
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
