import React from 'react'
import { SelectDemo } from '../components/select'
import { Container } from '@chakra-ui/react'
import Image from 'next/image'
import { BmiCard } from '../data/bmiData'
type BmiData={
   
    icon: string;
    value: string;
    title?: string;
    description?: string;
} 

const bmiData: BmiData = {
    title:'Body Mass Index (BMI)',
    icon:'/assets/pic9.png',
    value:'30',
    description:'Healthy'
}
export const HealthSection = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>
      <header className='flex justify-between items-center '>
        <p>BMI Calculator</p>
        <SelectDemo/>

      </header>
      <main className="2xl:grid 2xl:grid-cols-2 grid gap-4 ">
    <div className="grid gap-4">
        {BmiCard.map((item, index) => (
            <ul className="grid " key={index}>
                <li className={`grid text-black grid-cols-2 justify-between p-4  ${item.color} items-center rounded-xl `}>
                    <div className="">
                        <h2 >{item.name}</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={item.icon} alt="" width={100} height={100} className="w-full" />
                        <p>{item.value}</p>
                    </div>
                </li>
            </ul>
        ))}
    </div>
    
    <Container className="bg-[#4A4949] flex flex-col justify-center rounded-2xl">
        <div className="flex flex-col gap-2 p-4 ">
            <p className='text-wrap'>{bmiData.title}</p>
            <ul className="flex justify-between  gap-2 items-center">
                <li className="text-white text-2xl">{bmiData.value}</li>
                <li className="p-2 text-black bg-[#D6FFDD] rounded-xl text-center ">{bmiData.description}</li>
            </ul>
            <Image src={bmiData.icon} alt="" width={100} height={100} className="w-full" />
        </div>
    </Container>
  
</main>


    </div>
    
    
    </>
  )
}
