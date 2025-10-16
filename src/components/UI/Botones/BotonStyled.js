import styled from 'styled-components';

export const BotonWrapper = styled.button`
    border-radius: 25px;
    padding: 1rem;
    border: 2px solid var(--color-surface);
    background-color: var(--color-pink-light);
    font-size: 1em;
    color: var(--color-text);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-pink-medium);
        color: var(--color-surface);
        transform: scale(1.03);
    }
`;
