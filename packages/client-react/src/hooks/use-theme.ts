import { useEffect, useState } from 'react';
import { setStorage, getStorage } from '../utils/storage';
import { allThemes, currentTheme } from '../config/static';

export function useTheme(): UseThemeReturn {

    // get all themes from storage
    const themes = getStorage<Theme>(allThemes);

    // hooks
    const [theme, setTheme] = useState<Theme[string]>(themes?.default as Theme[string]);
    const [themeLoaded, setThemeLoaded] = useState(false);

    // handlers
    const setMode = (mode: Theme[string]) => {
        setStorage('theme', mode)
        setTheme(mode);
    };

    useEffect(() =>{
        const localTheme = getStorage<Theme[string]>(currentTheme);
        localTheme ? setTheme(localTheme) : setTheme(themes?.default as Theme[string]);
        setThemeLoaded(true);
    }, []);

    return [theme, themeLoaded, setMode];
}