import React from 'react'
import data from "../../data/cv.json"

const MiCV = () => {

    const renderItems = (items) => (
        <div className="w-full mx-auto">
            <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">

                {items.map((item, idx) => (
                    <li 
                        key={idx} 
                        className="w-full md:w-[90%] 
                                   bg-[var(--bloques)] 
                                   p-6 rounded-xl shadow-md
                                   text-[var(--color-encabezados)]"
                    >

                        {item.certificado && (
                            <img
                                src={item.certificado}
                                alt={`Certificado de ${item.titulo}`}
                                className="rounded-lg shadow-md w-full h-96 object-cover mb-4"
                            />
                        )}

                        <h3 className="text-lg font-semibold">
                             {item.titulo}
                        </h3>

                        <p className="text-sm text-[var(--color-destacado-marronsuave)] mb-2">
                            {item.institucion},  {item.periodo}
                        </p>

                       

                        <div className="flex flex-wrap gap-2">
                            {item.habilidades.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 
                                               bg-[var(--botones)] 
                                               text-[var(--espacio-blanco)] 
                                               rounded-full text-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section className="w-full mx-auto p-6 text-[var(--color-encabezados)]">
            <h2 className="text-2xl font-bold mt-8 mb-6">Formación</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">Tecnologías</h3>
            {renderItems(data.tecnologia)}

            <h3 className="text-xl font-semibold mt-8 mb-2">Marketing</h3>
            {renderItems(data.marketing)}
        </section>
    )
}

export default MiCV
