import React, { useEffect } from 'react'
import "./section3.css"
import Avatar from "../../images/avatar.png"
import AOS from "aos"
import "aos/dist/aos.css"

const Section3 = () => {

  useEffect(() => {
    AOS.init({duration : 2000})
  },[])

  return (
    <div className='container flex items-center'>
       <div className='avatar-image flex-1 flex justify-center items-center'>
          <img src={Avatar} alt='' data-aos="fade-up" />
       </div>
       <div className='flex-1 flex flex-col justify-start '>
          <h1 className='text-6xl font-bold mb-10'>How it works</h1>
          <ul className='list text-5xl font-normal cursor-pointer '>
            <li className='active'>Select an Avatar</li>
            <li>Create or Generate Script</li>
            <li>Select AI Voices</li>
            <li>Publish</li>
          </ul>
       </div>
    </div>
  )
}

export default Section3