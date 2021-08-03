import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/use-theme';
import { Container } from './styles';
import { themes } from '../../config/themes';
import { setStorage } from '../../utils/storage';

export function ReporterButton() {
    const {theme, themeLoaded} = useTheme();

    useEffect(() => {
        setStorage('all-themes', themes);
    }, []);

    return themeLoaded && (
        <ThemeProvider theme={theme}>
            <Container>
                Report List
            </Container>
        </ThemeProvider>
    );
}