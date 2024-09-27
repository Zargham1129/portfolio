import React from 'react'
import laptop from "../Assets/laptop.png";

const Analytics   = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a]'> DATA ANALYICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage data analytics centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti deserunt reiciendis unde doloremque ad, quasi mollitia, exercitationem excepturi commodi iure minima. Atque, repellendus officiis temporibus vel repudiandae laborum minus error!
                </p>
                <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Strated</button>
            </div>


        </div>
    </div>
  )
}

export default  Analytics
