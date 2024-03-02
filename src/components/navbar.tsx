"use client"
 
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
   
import navbarSections from "../constants/data";
import Subsection from "./Subsection";

const Navbar = () => {
    return (
        <div className=" bg-red-500 text-white p-5 flex w-full justify-center">
            <div className="flex gap-5">        
                {navbarSections.map((section, index) => (
                    <NavigationMenu key={index}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <Link href={section.url}>
                        <NavigationMenuTrigger  className="text-black">{section.name}</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent className="flex flex-col">
                        {section.subSections && section.subSections.length > 0 && (
                            <Subsection subSections={section.subSections} />
                        )}
                         </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                ))}
            </div>
        </div>
    );
}

export default Navbar;