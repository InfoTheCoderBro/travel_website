import SectionHeading from '@/componets/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='pt-16 pb-24'>
        {/* Section Heading */}
        <SectionHeading heading='Recommended Hotels' />

        <div className='w-[80%] mx-auto grid grid-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>

          {/* Hotel Card   */}
{hotelsData.map((data, index)=>{
    return (
        <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${index*100}`} > 
            <HotelCard hotel={data} />
        </div>
    );
})
}


        </div>
    </div>
  )
}

export default Hotel