import React from 'react';
import { Container } from './styles';

export function Header({ children }: HeaderProps) {
    return (
        <Container>{children}</Container>
    );
}