import ListText from "./ListText";

const Information = () => {
  const ListTexts = [
    "Are you’re charting a new course in a different city/country or have rounded up your International studies?",
    "Feeling stuck in your current job and ready for a career makeover?",
    "landing interviews feels like a magic trick you can’t quite master?",
  ];
  return (
    <div className="lg:mt-20">
      <div className="grid lg:grid-cols-2 w-full gap-6">
        <div className="flex items-center  justify-center">
          <img src="/src/assets/Group.png" alt="" />
        </div>
        <div className="mt-10 order-[-1] lg:order-1">
          <h2 className="lg:text-4xl text-3xl font-bold mb-7">
            Are You <br className="lg:block hidden" /> Someone Who?
          </h2>
          <p className="lg:text-lg text-base mb-4">
            Do any of these sound familiar? <br /> Perfect. You’ve found just
            the help you need!
          </p>
          <div className="">
            <ul className="list-image-ellipse text-left lg:text-lg sm:text-base text-sm ">
              {ListTexts.map((text: string) => (
                <ListText text={text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
