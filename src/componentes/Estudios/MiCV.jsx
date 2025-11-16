import React from 'react'
import data from "../../data/cv.json"
import { motion } from "framer-motion";


const MiCV = () => {

    const renderItems = (items) => (
        <div className="w-full mx-auto">
            <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">

                {items.map((item, idx) => (
                    <li key={idx} className="w-full md:w-[90%] bg-[var(--bloques)] p-6 rounded-xl shadow-md border border-[var(--espacio-blanco)] text-[var(--color-encabezados)]" >

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



                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut",
                                        staggerChildren: 0.08
                                    }
                                }
                            }}
                        >
                            {item.habilidades.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 py-1 
                       bg-[var(--botones)] 
                       text-[var(--espacio-blanco)] 
                       rounded-full text-xs"
                                    variants={{
                                        hidden: { opacity: 0, y: 8 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>


                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section className="w-full mx-auto p-6 text-[var(--color-encabezados)]">
            <h1 className="text-4xl font-bold mt-20 mb-6">Mi formación académica</h1>

            <h2 className="text-xl font-semibold mt-4 mb-2">Tecnologías</h2>
            {renderItems(data.tecnologia)}

            <h2 className="text-xl font-semibold mt-8 mb-2">Marketing</h2>
            {renderItems(data.marketing)}
        </section>
    )
}

export default MiCV
