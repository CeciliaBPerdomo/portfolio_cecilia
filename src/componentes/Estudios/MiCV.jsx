import React from 'react'
import data from "../../data/cv.json"
import { motion } from "framer-motion";


const MiCV = () => {

    const renderItems = (items) => (
        <div className="w-full mx-auto">
            <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">

                {items.map((item, idx) => (
                    <motion.li
                        key={idx}
                        className="w-full md:w-[90%] bg-[var(--bloques)] p-6 rounded-xl shadow-md border border-[var(--espacio-blanco)] text-[var(--color-encabezados)]"
                        whileHover={{
                            scale: 1.02,
                            y: -4,
                            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                            {/* Imagen a la izquierda */}
                            {item.certificado && (
                                <img
                                    src={item.certificado}
                                    alt={`Certificado de ${item.titulo}`}
                                    className="rounded-lg shadow-md w-full h-64 object-cover"
                                />
                            )}

                            {/* Texto a la derecha */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl font-semibold">
                                    {item.titulo}
                                </h3>

                                <p className="text-base text-[var(--color-destacado-marronsuave)] mb-3">
                                    {item.institucion}, {item.periodo}
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
                                            className="px-3 py-1 bg-[var(--botones)] text-[var(--espacio-blanco)] rounded-full text-sm"
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
                            </div>

                        </div>

                    </motion.li>

                ))}
            </ul>
        </div>
    );

    return (
        <section className="w-full mx-auto p-6 text-[var(--color-encabezados)]">
            <h1 className="text-4xl font-bold mt-20 mb-6">Mi formación académica</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Tecnologías</h2>
            {renderItems(data.tecnologia)}

            <h2 className="text-2xl font-semibold mt-4 mb-2">Metodologías</h2>
            {renderItems(data.metodologias)}

            <h2 className="text-2xl font-semibold mt-8 mb-2">Marketing</h2>
            {renderItems(data.marketing)}
        </section>
    )
}

export default MiCV
