import React from 'react'

// Estilo
import {
    BotonWrapper,
} from "./BotonStyled"

const Boton = ({children}) => {
  return (
    <BotonWrapper>
        {children}
    </BotonWrapper>
  )
}

export default Boton