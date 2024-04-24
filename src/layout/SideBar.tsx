import React from 'react'
import ThemeToggle from "./components/ThemeToggle"
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"

interface SideBarProps {
  toggleMode: (themeValue: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({toggleMode}) => {
  
  return (
   <div className="w-1/6 p-2 bg-gray-400 dark:bg-slate-800 shadow">
      <div className="h-20 flex px-4 py-3 justify-between items-center">
        <Label className="text-2xl text-logoText">Mind Log</Label>
        <ThemeToggle toggleMode={toggleMode}/>
      </div>
   </div>
  )
}

export default SideBar
