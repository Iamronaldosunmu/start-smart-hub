import '../../../css/styles.css';


interface BillingCardProps{
    type: string;
    price: number;
    description: string
    proText?: string
}

const BillingFree = ({type, price, description, proText}: BillingCardProps) => {
  return (
    <div className='lg:mr-7 mb-7 px-5 lg:px-0 sm:px-10'>
        <div className='px-6 border shadow rounded-xl'>
            <h1 className='font-semibold text-3xl mb-3 mt-4'>{type}</h1>
            <p className='mb-3 text-2xl'>${price}</p>
            <p className='text-gray-500 mb-7 text-sm'>{description}</p>
            <div className="border border-gray-300"></div>
            {proText && (<p className='mt-6'>Everything in the Free plan, plus</p>)}
            <ul className="list--tick mt-6 pb-6">
              <li className=''>
                Amazing feature one
              </li>
              <li>
                Wonderful feature one
              </li>
              <li>
                Priceless feature three
              </li>
              <li>
                Splended feature four
              </li>
              {proText && (<li>{proText}</li>)}

            </ul>
        </div>
      
    </div>
  )
}

export default BillingFree
