import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Yesterday" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Yesterday</SelectLabel>
          <SelectItem value="apple">1 month</SelectItem>
          <SelectItem value="banana">3 month</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
