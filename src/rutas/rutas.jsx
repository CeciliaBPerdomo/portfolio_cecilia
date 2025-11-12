import {
    Routes,
    Route
} from 'react-router-dom';

import Home from "../paginas/Home/Home"


function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Rutas;