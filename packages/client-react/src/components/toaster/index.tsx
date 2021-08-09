import React from 'react';
import { Container } from "./styles";

export function Toaster({ children }: ToasterProps): React.ReactElement {
    return <Container>{children}</Container>
}