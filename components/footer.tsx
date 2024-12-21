import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io"; 
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const footer = () => {
  return (
    <>
    <div className='mt-10 flex-wrap  bg-footer1 text-white pr-10'>
   <div className='flex mt-20  pt-10'>
   <div className='w-98 px-20'>
      <h1 className='text-3xl font-extrabold'>Any Questions?</h1>
      <p className='py-5 text-base'>Get in touch!  We are here to help.</p>
      <div className='mt-10 flex'> 
      <p className='text-2xl rounded-full bg-slate-500 p-4 text-white font-bold'><CiPhone /></p>
      <ul className='px-5'>
      <li className=' text-lg pr-10'>Call Us</li>
       <h1 className='text-xl' >(408) 675-1879</h1>
      </ul> 
      </div>
      <div className='mt-10 flex'> 
      <p className='text-2xl rounded-full bg-slate-500 p-4 text-white font-bold'><MdOutlineEmail /></p>
      <ul className='px-5'>
      <li className=' text-lg pr-10'>Email Us</li>
       <h1 className='text-xl' >info@shopmonkey.io</h1>
      </ul> 
      </div>
      </div>
      <div className='w-56  px-8'>
      <ul className="space-y-5 font-medium ">
        <li className='text-lg font-bold'>Capabilities</li>
        <li className="text-white hover:text-footer">Estimates</li>
        <li className="text-white hover:text-footer">Customer Comms</li>
        <li className="text-white hover:text-footer">Inventory</li>
        <li className="text-white hover:text-footer">Payments</li>
        <li className="text-white hover:text-footer">Workflow</li>
        <li className="text-white hover:text-footer">Empower Techs</li>
        <li className="text-white hover:text-footer">Team Management</li>
        <li className="text-white hover:text-footer">Reporting</li>
        <li className="text-white hover:text-footer">Mobile App for Techs</li>
        <li className="text-white hover:text-footer">Integrations</li>
        <li className="text-white hover:text-footer">Shopmonkey Capital</li>
        <li className="text-white hover:text-footer">Marketing Suite</li>
        <li className="text-white hover:text-footer">Express Lane</li>
      </ul>
      </div>
      <div className='w-54 px-8'>
      <ul className="space-y-5 font-medium">
        <li className='text-lg font-bold'>Shop Types</li>
        <li className="text-white hover:text-footer">Auto Repair</li>
        <li className="text-white hover:text-footer">Enterprise</li>
        <li className="text-white hover:text-footer">Multi-Shop Owners</li>
        <li className="text-white hover:text-footer">Tire Shops</li>
        <li className="text-white hover:text-footer">Oil Change</li> 
        <li className="text-white hover:text-footer">Truck Repair</li>
        <li className="text-white hover:text-footer">Wrap and Detail</li>
         <li className="text-white hover:text-footer">Marine Repair</li>
        <li className="text-white hover:text-footer">Motorcycle Repair</li>
        <li className="text-white hover:text-footer">Auto Body Shops</li>
        <li className="text-white hover:text-footer">RV Repair</li>
         <li className="text-white hover:text-footer">Performance</li>
        <li className="text-white hover:text-footer">Fleet Repair</li>
         <li className="text-white hover:text-footer">Other</li>
      </ul>
      </div>
      <div className='w-54 px-8'>
      <ul className="space-y-5 font-medium">
        <li className='text-lg font-bold'>Resource</li>
        <li className="text-white hover:text-footer">Resource Library</li>
        <li className="text-white hover:text-footer">Shop Legends</li>
        <li className="text-white hover:text-footer">Blog</li>
        <li className="text-white hover:text-footer">Webinars</li>
        <li className="text-white hover:text-footer">Customer Reviews</li> 
        <li className="text-white hover:text-footer">Newsroom</li>
        <li className="text-white hover:text-footer">Shop Performance Quiz</li>
        <li className="text-white hover:text-footer">Business Valuation Calculator</li>
        <li className="text-white hover:text-footer">No-Show Loss Calculator</li>
        <li className="text-white hover:text-footer">Help Center</li>
        <li className="text-white hover:text-footer">FAQ</li>
      </ul>
      </div>
       
      <div className='w-54 px-8'>
      <ul className="space-y-5 font-medium ">
        <li className='text-lg font-bold'>Company</li>
        <li className="text-white hover:text-footer">Pricing</li>
        <li className="text-white hover:text-footer">About Us</li>
        <li className="text-white hover:text-footer">Careers</li>
        <li className="text-white hover:text-footer">Referral Program</li>
        <li className="text-white hover:text-footer">System Status</li> 
        <li className="text-white hover:text-footer">Security</li>
        <li className="text-white hover:text-footer">No-Show Loss Calculator</li>
        <li className="text-white hover:text-footer">Help Center</li>
        <li className="text-white hover:text-footer">FAQ</li>
      </ul>
       
        <h2 className='text-lg text-bold mt-10'>Follow us!</h2>
        <ul className='flex mt-5'>
        <li className=" text-2xl text-white hover:text-footer">< FaFacebookSquare /></li> 
         <li className="pl-5 text-2xl text-white hover:text-footer"><FaInstagram /></li>
         <li className="pl-5 text-2xl text-white hover:text-footer"><IoLogoLinkedin /></li>
         <li className="pl-5 text-2xl text-white hover:text-footer"><IoLogoYoutube /></li>
       </ul>
      </div>
      </div>
      <div className='flex mx-20 mt-20 justify-between items-center'>
        <p>© 2024, Shopmonkey Inc. All rights reserved.</p>
        <ul className='flex  '>
          <li className=''>Privacy Settings</li>
          <li className='px-10'>Privacy Policy</li>
          <li className=''>Terms & Conditions</li>
        </ul>
        </div>
        <div className='mt-5 mx-20'>
        <hr/>
        </div>
        <div className='mt-5 mb-10 mx-20 pb-5 w-3/5'>
        <p className='text-sm'>*Individual results may vary. Capterra reviews constitute the subjective opinions of individual end users based on their own experiences and do not represent the views of Capterra or its affiliates.</p>
        </div>
      </div>

     
     
      
      </>
    
   
  )
}

export default footer
