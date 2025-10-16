import styled from 'styled-components';
// import { motion } from 'framer-motion';

export const HeroContainerStyled = styled.div`
    background-color: var(--color-border);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90vh;   
    margin: 0 auto;
`;

export const TextoContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        line-height: 5px;

        span {
            font-family: "Dancing Script", cursive;
            font-size: 3rem;
        }
    }

    h2 {

    }

    h3 {
        line-height: 1px;
    }

    span {
        padding: 1rem;
    }
`;

export const ImagenContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const BotonesContenedor = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 0.5rem;
    }
`;