import React from 'react';
import { Dock, DockIcon } from "@/components/ui/dock";
import { HomeIcon, FileUser} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { Separator } from "@/components/ui/separator";

const DockBar = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <Dock direction="middle">
        <DockIcon>
          <HomeIcon/>
        </DockIcon>
        <DockIcon>
          <GrProjects className="w-6 h-6"/>
        </DockIcon>
        <Separator orientation="vertical" className="h-1/2" />
        <DockIcon>
          <FaGithub className="w-6 h-6"/>
        </DockIcon>
        <DockIcon>
          <FaLinkedin className="w-6 h-6"/>
        </DockIcon>
        <Separator orientation="vertical" className="h-1/2" />
        <DockIcon>
          <FileUser/>
        </DockIcon>
      </Dock>
    </div>
  )
}

export default DockBar;