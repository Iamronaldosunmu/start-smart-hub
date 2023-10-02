const Information = () => {
  return (
    <div className="lg:mt-20">
      <div className="grid lg:grid-cols-2 w-full">
        <div className="flex items-center justify-center z-50 relative">
          <img src="/src/assets/Group.png" alt="" />
        </div>
        <div className="mt-10">
          <h2 className="text-4xl font-bold mb-7">
            Are You <br className="lg:block hidden" /> Someone Who?
          </h2>
          <p className="text-lg mb-4">
            Do any of these sound familiar? <br /> Perfect. You’ve found just
            the help you need!
          </p>
          <ul className="list-disc ml-6 text-left text-lg">
            <li className="mb-5">
              Are you charting a new course in a different city/country or have
              rounded up your International studies?
            </li>
            <li className="mb-5">
              Feeling stuck in your current job and ready for a career makeover?
            </li>
            <li className="mb-5">
              Landing interviews feels like a magic trick you can’t quite
              master?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
