import React from 'react'
import { Container } from '@chakra-ui/react'
import Image from 'next/image'
import { HealthSection } from './healthSection'
const body =[{
  title:'Chest (in)',
  icon:'/assets/red.svg',
  number: 44.5,
},
{
  title:'Waist (in)',
  icon:'/assets/green.svg',
  number: 34,
},
{
  title:'Hip (in)',
  icon:'/assets/green.svg',
  number: 42.5,
},]


const BodySection = () => {
  return (
    <>
    <div className='flex flex-col gap-4 px-[40px] py-[50px] bg-[#303030] border border-[#F1F1F1] rounded-3xl shadow-custom-black'>
 
    <HealthSection/>
    <div className='grid grid-cols-2 gap-4 mt-[100px]  ' >
    <div className='flex flex-col gap-8'>
        <ul className='flex flex-col gap-4'>
            <li className='text-white text-xl md:text-2xl'>
            Body Measurements
            </li>
            <li className='text-[#CACACA]'>
            Last checked 2 Days Ago
            </li>
            <li className='rounded-2xl p-4 bg-[#5E5E5E] text-center'>
            Inverted Triangle Body Shape
            </li>

        </ul>
        <div className='flex flex-col gap-10 '>
        {body.map((item, index) => (
           <ul key={index} className=' '>
             <li>
                 <Container className='flex flex-col items-center p-[32px] max-w-[200px] bg-white text-black rounded-2xl'>
                  <p>{item.title}</p>
                  <div className='flex gap-2 items-center'>
                   <span>{item.number}</span>  
                    <Image src={item.icon} alt="" width={16} height={9}  />
                  </div>

                 </Container>
             </li>
           </ul>
        ))}
       </div>
    </div>
    <div className='flex items-center justify-center'>
    <Image src={'/assets/pic10.svg'} alt="" width={50} height={50} className='w-full' />
    </div>
    
    </div>
    </div>
    
    </>
  )
}

export default BodySection