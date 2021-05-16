import { createContext, useState } from "react";

  const AppContext = createContext<IAppContext>(null);

  export const AppProvider : React.FC = ({children}) => {
    const lightThemePath = './themes/light/bootstrap.css';
    const darkThemePath = './themes/dark/bootstrap.css';
    const [darkMode, setDarkMode] = useState(false);
    const [stylePath, setStylePath] = useState(lightThemePath);

    const switchThemeMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) 
            setStylePath(darkThemePath);
        else 
            setStylePath(lightThemePath);
    }

    const defaultValue : IAppContext = {
        darkMode,
        stylePath,
        switchThemeMode
    };

    return (
        <AppContext.Provider value={defaultValue}>
            {children}
        </AppContext.Provider>
    )
  }

  export interface IAppContext {
    darkMode: boolean;
    stylePath: string;
    switchThemeMode: () => void;
  }
  
  export default AppContext;