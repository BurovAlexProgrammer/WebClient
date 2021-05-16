import { useContext } from 'react';
import Toggle from 'react-toggle';
import AppContext from '../../contexts/AppContext';

export const ThemeToggle = () => {
    const ctx = useContext(AppContext);

    const onToggle = () => {
        ctx.switchThemeMode();
    }

    return <div>
            <Toggle className={`align-middle`} icons={false} onClick={onToggle} defaultChecked={ctx.darkMode}/>
            <span className='align-middle text-light'> Dark Theme</span>
        </div>
}