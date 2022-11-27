import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const themeStyles = {
    dark:{
        background: '#282c34',
        textColor: '#fff'
    },
    light:{
        background: '#fff',
        textColor: '#282c34'
    }
}
const ThemeContext = createContext();

function ThemeProvider(props){
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
      }
    
    const value = {theme: themeStyles[theme], toggleTheme, themeName: theme};

    return<ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };