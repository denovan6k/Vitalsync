'use client'
// import { Button } from "@/components/ui/button"
// import { HStack } from "@chakra-ui/react"
import Sidebar from "./components/sidebar"
import Cards from "./components/card"
import Chart from "./components/stackedChart"
import BodySection from "./section/bodySection"

import Header from "./components/header"

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-[0.1fr_2fr_1.5fr] h-screen">
      
      <div className="hidden lg:flex lg:bg-[#E8E7E7] shadow-custom-black border border-[#E8E7E7]"> 
        
        <Sidebar/>
      
       </div>
       <div className="flex flex-col  gap-8 px-[40px] py-[20px] bg-[#FCFAF6]">
       <Header/>
       <Cards/>
       <Chart/>
       </div>
     

       <div className="bg-[#FCFAF6]">
       <BodySection/>
       </div>
       
    </div>
 
   
  )
}
export default Home
