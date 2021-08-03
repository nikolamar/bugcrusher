import styled from 'styled-components';

export const Container = styled.p`
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
`;
