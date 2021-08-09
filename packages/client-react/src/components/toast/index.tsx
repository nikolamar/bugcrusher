import React from 'react';
import { Container } from "./styles";

export function Toast({ children }: ToastProps): React.ReactElement {
    return <Container>{children}</Container>
}