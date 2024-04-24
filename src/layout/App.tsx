import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import ContentNavigate from './ContentNavigate'
import NoteEditor from './NoteEditor'

const App = () => {
  const [mode, setMode] = useState('light')

  const toggleMode = (themeValue:string) => {
    
    setMode(themeValue)
  }

  useEffect(()=>{
    let initTheme:string = localStorage.getItem('theme')
    if(!initTheme) {
      initTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.querySelector("#theme-btn")?.setAttribute("data-state", initTheme == 'light' ? 'checked' : 'unchecked')
    
    setMode(initTheme)
  },[mode])

  return (
   <div className={`${mode == 'light'? 'light' : 'dark'} w-screen h-screen flex box-border`}>
    <SideBar toggleMode={toggleMode}/>
    <ContentNavigate/>
    <NoteEditor/>
   </div>
  )
}

export default App
