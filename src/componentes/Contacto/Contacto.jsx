import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contacto = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section 
    id="contact"
    className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--color-background)]">
      {/* Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-12 text-[var(--color-encabezados)] text-center"
      >
        Cuéntame sobre tu web soñada ✨
      </motion.h2>

      {/* Contenedor de la fila */}
      <div className="w-[90%] flex flex-col md:flex-row gap-8 items-start">
        {/* Formulario */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 p-8 border border-[var(--espacio-blanco)] shadow-lg rounded-md"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium text-[var(--color-encabezados)]">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-acento)]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-[var(--color-encabezados)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-acento)]"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium text-[var(--color-encabezados)]">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              rows={5}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded font-semibold text-[var(--espacio-blanco)] bg-[var(--botones)] hover:bg-[var(--color-acento)] transition-colors"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {sent && (
            <p className="mt-4 text-[var(--color-acento)] font-medium">
              ✅ ¡Tu mensaje fue enviado con éxito!
            </p>
          )}
        </motion.form>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/contacto.png"
            alt="Contacto"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
