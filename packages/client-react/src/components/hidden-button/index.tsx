import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/use-theme';
import { Container } from './styles';

export function HiddenButton({
    onClick,
    children,
    width = '100px',
    bottom = '100px',
}: HiddenButtonProps): any {

    // hooks
    const [currentTheme, isThemeLoaded] = useTheme();

    return isThemeLoaded && (
        <ThemeProvider theme={currentTheme}>
            <Container onClick={onClick} width={width} bottom={bottom}>
                {children}
            </Container>
        </ThemeProvider>
    );
}