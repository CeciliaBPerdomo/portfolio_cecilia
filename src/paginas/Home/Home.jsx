import React from 'react'
import Hero from '../../componentes/Hero/Hero'
import BarraTecno from '../../componentes/BarraTecno/BarraTecno'
import Acerca from '../../componentes/AcercaDeMi/Acerca'
import MisProyectos from '../../componentes/Proyectos/MisProyectos'
import Contacto from '../../componentes/Contacto/Contacto'

const Home = () => {
  return (
    <div>
       <Hero/>
       <BarraTecno />
       <Acerca/>
       <MisProyectos/>
       <Contacto/>
    </div>
  )
}

export default Home