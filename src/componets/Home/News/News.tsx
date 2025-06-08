import SectionHeading from '@/componets/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'
import { newsData } from '@/data/data'

const News = () => {
  return (
    <div className='pt-16 pb-16'>
        {/* Section Heading */}
        <SectionHeading heading="Exciting Travel News for You" />

        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
            
            {newsData.map((data, index)=>{
              return(
 <div key={data.id} data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={`${index*100}`}>

                <NewsCard image={data.image} title={data.title} date={data.date} />
            </div>
              )
            })

            }
           

        </div>

    </div>
  )
}

export default News