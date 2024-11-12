import { Button } from "@/components/ui/button"
import {
  
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { PanelsTopLeft } from "lucide-react"

import SideDash from "./SideDash"
const Drawer = () => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          <PanelsTopLeft className="h-8 w-8 text-black" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle> <SideDash/> </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
        
        </DrawerBody>
        <DrawerFooter>
         
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}
export default Drawer