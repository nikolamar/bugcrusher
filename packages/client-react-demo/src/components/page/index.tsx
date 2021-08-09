import React from 'react';
import { Container } from './styles';

export function Page({ children }: PageProps) {
    return (
        <Container>{children}</Container>
    );
}