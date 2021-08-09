import styled from 'styled-components';

export const Container = styled.div<{ width: string, bottom: string }>`
    border-radius: 0 20px 20px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    min-width: ${({ width }) => width};
    background-color: ${({ theme }) => theme.colors.bar};
    left: ${({ width }) => `calc(-${width} + 20px)`};
    bottom: ${({ bottom }) => bottom};
    height: 30px;
    line-height: 30px;
    position: fixed;
    text-align: center;
    transition: ${({ theme }) => theme.transition};
    z-index: 100;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        left: 0px;
    }
`;

export const FileInput = styled.input`
    display: none;
`;
