import { useEffect, useState } from 'react';
import { setStorage, getStorage } from '../utils/storage';
// types
import type { Theme } from 'types/main';

type RetUseTheme = {
    theme: Theme[string],
    themeLoaded: boolean,
    setMode: (theme: Theme[string]) => void
};

export function useTheme(): RetUseTheme {
    const themes = getStorage<Theme>('all-themes');
    const [theme, setTheme] = useState<Theme[string]>(themes?.default as Theme[string]);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode: Theme[string]) => {
        setStorage('theme', mode)
        setTheme(mode);
    };

    useEffect(() =>{
        const localTheme = getStorage<Theme[string]>('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes?.default as Theme[string]);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode };
}