import React,{ useEffect } from "react";
import { Switch } from "../../components/ui/switch"

let themeValue = getPreferTheme();
function reflectPreference() {
    document.firstElementChild.setAttribute("data-theme", themeValue);
    
    document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
  
    // Get a reference to the body element
    const body = document.body;
  
    // Check if the body element exists before using getComputedStyle
    if (body) {
      // Get the computed styles for the body element
      const computedStyles = window.getComputedStyle(body);
  
      // Get the background color property
      const bgColor = computedStyles.backgroundColor;
      // Set the background color in <meta theme-color ... />
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", bgColor);
    }
  }

  function getPreferTheme() {
    let currentTheme = localStorage.getItem("theme");
    
    if(currentTheme) {
        return currentTheme
    }else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
        }
  }
  function setPreference() {
    localStorage.setItem("theme", themeValue);
    reflectPreference();
  }

  function setThemeFeature(toggleMode: any) {
    
    reflectPreference();
    
    document.querySelector("#theme-btn")?.addEventListener("click", function(e) {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
      
      toggleMode(themeValue)
    });
  }

  interface SideBarProps {
    toggleMode: (themeValue: string) => void;
  }

const ThemeToggle: React.FC<SideBarProps> = ({toggleMode}) => {

  useEffect(()=>{
    setThemeFeature(toggleMode);
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", ({ matches: isDark }) => {
            themeValue = isDark ? "dark" : "light";
            setPreference();
        });
    
    return ()=> {}
  },[])
  
  return (
    <Switch id="theme-btn" checked={themeValue == 'light' ? true : false} />
  );
};

export default ThemeToggle;
