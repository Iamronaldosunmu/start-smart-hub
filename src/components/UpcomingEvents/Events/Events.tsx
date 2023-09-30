interface EventProps {
    title: string;
    date: string;
    location: string;
    price: number;
}

const Events = ({title, date, location, price}: EventProps) => {
  return (
    <div>
        <div>
            <img src="/src/assets/" alt="" />

        </div>
        <div className="grid grid-cols-2 h-90">
            <div className="">
                <img src="/src/assets/event.png" className="w-full" alt="" />
            </div>
            <div className="ml-7 text-gray-500 lg:text-xl">
                <h2 className="font- lg:text-4xl xl:text-5xl text-2xl mb-9 text-black">{title}</h2>
                <p className="mb-5">
                    <img src="/src/assets/date.png" className="inline mr-4" alt="" />
                    {date}
                    </p>
                <p className="mb-5">
                    <img src="/src/assets/location.png" className="inline mr-4" alt="" />
                    {location}
                    </p>
                <p className="mb-5">
                    <img src="/src/assets/tag.png" className="inline mr-4" alt="" />
                    from $ {price}</p>
                <button className="font-semibold px-4 py-3 border text-black border-black rounded-lg text-sm hover:bg-black hover:text-white transition ease-in-out duration-300">
                    APPLY NOW
                </button>

            </div>
        </div>
      
    </div>
  )
}

export default Events
