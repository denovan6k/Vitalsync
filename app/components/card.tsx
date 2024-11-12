
import { Card } from "@chakra-ui/react"
// import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardData } from "../data/cardData"
import Image from "next/image"
const Cards = () => {
  return (

    <>

    <div className="grid md:grid-cols-3 gap-8">

    {CardData.map((card,index)=>(
 <Card.Root key={index} className=" bg-white rounded-2xl border-2 border-[#E8E7E7] shadow-custom-black">
 <Card.Body gap="2">
    <div className="flex gap-4 items-center"> 
   <Image
     src={card.icon}
     alt=""
     width={50} height={50}/>
   <Card.Title className="text-black">{card.title}</Card.Title>
   </div>
   <div className="flex gap-2 items-center">
    <Card.Description className='text-[#818181] text-3xl'>{card.description}</Card.Description>
    <Card.Description className="text-sm text-[#272927]">{card.data}</Card.Description>
    
  
   </div>
   <Button className={`${card.color} max-w-[100px] p-4 rounded-xl text-black`}>
    {card.link}
   </Button>
 </Card.Body>
 <Card.Footer justifyContent="">
   <Image src={card.graph} alt='' width={100} height={100} className="w-full" />
 </Card.Footer>
</Card.Root>
    ))}
    
    </div>
    
    </>
   
  )
}

export default Cards