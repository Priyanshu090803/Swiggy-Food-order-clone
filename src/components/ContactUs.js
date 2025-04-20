import React from 'react';

const ContactUs = () => {
  return (
    <section className=" w-full  py-24 px-5 flex justify-center bg-gradient-to-br  from-red-100 to-orange-50">
      <div className=' flex flex-col  
      items-center  p-20  bg-amber-50 shadow-xl shadow-rose-200 rounded-lg  w-full md:w-2/5'>
        <h1 className=' text-3xl  uppercase  bg-gradient-to-tr from-gray-900 to-purple-300 bg-clip-text text-transparent  font-bold'>Contact Us!</h1>
        <div className=' mt-8  bg-amber-50 shadow-xl shadow-purple-200 rounded-2xl p-10 gap-10 flex flex-col items-center'>
          <div className=' flex gap-2 md:gap-6 items-center'>
            <h3 className=' text-xl  text-slate-500'>Name:</h3>
            <input
            type='text'
            placeholder='Enter your name...'
            className=' p-2 bg-white outline-red-200 outline-1 rounded-lg'
            />
          </div>
          <div className=' flex  gap-2 md:gap-6 items-center'>
            <h3 className=' text-xl  text-slate-500'>Email:</h3>
            <input
            type='email'
            placeholder='Enter your email...'
            className=' p-2 bg-white outline-red-200 outline-1 rounded-lg'
            />
          </div>
          <div className=' flex flex-col  gap-2 md:gap-6 items-center'>
          <label htmlFor="message" className="text-xl text-slate-500"> Message</label>
            <textarea 
              id="message" 
              placeholder=" Your message here..."
              rows={6}
              className=" p-4 bg-white w-full outline-red-200 outline-1 rounded-lg"
            />
          </div>

         <button className='  bg-slate-900 text-white px-3 py-1 rounded-xl hover:bg-slate-800 hover:scale-110 active:text-red-200 transition-all  text-xl'>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
