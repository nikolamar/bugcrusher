import React from 'react';
import { Container } from './styles';

export function AppLink({ children }: AppLinkProps) {
    return (
        <Container
            href="https://github.com/nikolamar/bugcrusher"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Container>

    );
}