import '../../css/styles.css'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 bg-red-50 large:grid-cols-2 p-10 large:p-20">
        <div className='flex  items-center justify-center'>
        <img
          src="/src/assets/DesktopHeroImage.png"
          
          className=""
          alt=""
        />
        </div>
        <div className="flex ml-6 items-center">
          <div className="text-center relative">
            <p className="text-4xl font-bold relative quotation-marked">
              At StartSmart, we're all about your goals.
            </p>
          </div>
        </div>
      </div>
 
  )
}

export default Hero
