import { createContext, useState } from "react";

  const AppContext = createContext<IAppContext>(null);

  export const AppProvider : React.FC = ({children}) => {
    //const [temp, setTemp] = useState<TempClass[]>([]);
    const lightThemePath = './themes/light/bootstrap.css';
    const darkThemePath = './themes/dark/bootstrap.css';
    const [darkMode, setDarkMode] = useState(true);
    const [stylePath, setStylePath] = useState(darkThemePath);
    const [,update] = useState(new Date());

    const switchThemeMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) 
            setStylePath(darkThemePath);
        else 
            setStylePath(lightThemePath);
    }

    const refresh = () => {
      update(new Date());
    }

    const defaultValue : IAppContext = {
        //temp,
        darkMode,
        stylePath,
        switchThemeMode,
        refresh,
        //tempFunc,
    };

    return (
        <AppContext.Provider value={defaultValue}>
            {children}
        </AppContext.Provider>
    )
  }

  export interface IAppContext {
    //temp: TempClass[];
    darkMode: boolean;
    stylePath: string;
    switchThemeMode: () => void;
    refresh: () => void;
    //tempFunc: () => void;
  }
  
  export default AppContext;