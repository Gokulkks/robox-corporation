import React from 'react'


const header = () => {
  return (
    <>
    
    <div className='mt-20 flex mx-20 '>
    <span className='text-footer1 font-extrabold text-4xl'>ROBOX </span>
    <span className='text-stone font-bold text-xl mt-3'>CORPORATION</span>
    <ul className="flex font-display text-sm pl-15 pr-10 text-footer">
      <li className="px-10 mt-4 ">Capabilities</li>
   <li className="px-10 mt-4">Shop Types</li>
     <li className="px-10 mt-4">Resources</li>
    <li className="px-10 mt-4">Company</li>
    <li className="px-10 mt-4">Pricing</li>
    </ul>
      <button className=" bg-button text-white px-4 py-2 rounded-lg font-normal text-xl">Request a Demo</button>
    
    </div>
    </>
  )
}

export default header
