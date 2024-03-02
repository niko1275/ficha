
"use client"
  
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
 
import React from 'react';

interface SubsectionProps {
    subSections: { name: string }[]; // Especifica el tipo de datos de subSections
}


const Subsection: React.FC<SubsectionProps>  = ({subSections}) => {
    const [position, setPosition] = React.useState("")
    return (
        <>
            {
                subSections.map((subsection,index)=>(
                  <NavigationMenuLink href="" className="p-5 hover:bg-slate-200" key={index}>{subsection.name}</NavigationMenuLink>
                ))
            }
        </>
    )
}

export default Subsection;