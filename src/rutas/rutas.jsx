import {
    Routes,
    Route
} from 'react-router-dom';

import Home from "../paginas/Home/Home"
import Estudios from '../paginas/CV/Estudios';


function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/estudios' element={<Estudios />} />
        </Routes>
    )
}

export default Rutas;