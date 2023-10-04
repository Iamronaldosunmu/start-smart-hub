const Grid = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2   ">
        <div className="bg-red-50 lg:px-16 px-4 sm:px-10 py-14">
          <div className="lg:w-[350px]">
            <p className="mb-8 text-3xl font-semibold">
              Here's what you can expect from us...
            </p>
            <ul className="line-logo text-base lg:text-lg">
              <li>Personalized guidance, empathy and support</li>
              <li>Expertise and insights</li>
              <li>Transparent communication</li>
              <li>collaboration</li>
              <li>Inclusivity</li>
              <li>Continous improvement and empowerment</li>
            </ul>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <img
            src="/src/assets/img1.png"
            className="w-full max-h-[500px] object-fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
