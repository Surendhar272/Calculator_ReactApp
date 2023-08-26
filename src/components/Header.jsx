import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({handleChangeTheme}){
    return (
        <header>
            
        <h1>Calculator</h1>
         <ThemeSwitcher handleChangeTheme={handleChangeTheme}/>
        </header>

    )
         
         
}