'use client';
import React, { useState } from 'react'
import { Button } from './button';

type Props = {};

import {
    Home, Search, Folder, Settings, ChevronRight
  } from "lucide-react";
import { Nav } from './nav';

export default function SideNavbar({}: Props){
const [isCollapsed, setIsCollapsed] = useState(false);

function toggleSidebar(){
  setIsCollapsed(!isCollapsed)
}

    return(
        <div className="relative min-w-[88px] border-r px-3 pb-10 pt-24 ">
          <div className="absolute right-[-20px] top-7 "> 
          <Button 
              onClick={toggleSidebar} variant='secondry' className=" bg-slate-300 rounded-full p-2">
            <ChevronRight />
          </Button>
          </div>
            <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                href: "/",
                icon: Home,
                variant: "default",
              },
              {
                title: "Finder",
                href: "/finder",
                icon: Search,
                variant: "ghost",
              },
              {
                title: "Extractor",
                href: "/extractor",
                icon: Folder,
                variant: "ghost",
              },
              {
                title: "Settings",
                href: "/settings",
                icon: Settings,
                variant: "ghost",
              },
              
            ]}
          />
        </div>
    )
}