import React, { useRef, useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const ContactUs = () => {
  const [gola, setGola] = useState(0);
  const circleRef=useRef();
  useGSAP(()=>{
    gsap.to(/*circleRef.current*/ ".circle",{
    x:gola,
    duration:0.4
  })
},[gola])
  const random = gsap.utils.random(-500,500,100)

  return (
    <div className=' h-96  flex justify-evenly  align-middle flex-col pl-80 border'>
      <button className='  w-30 text-2xl bg-gradient-to-r from-blue-200 to-purple-200 h-12 rounded-xl active:scale-95'
      onClick={()=>{
        setGola(random)
      }}
      >Click Me</button>
      <div ref={circleRef} className='circle h-30  w-30 bg-gradient-to-bl from-indigo-400 to-red-300 rounded-full'></div>

    </div>
  )
}

export default ContactUs