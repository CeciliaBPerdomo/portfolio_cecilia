import React from 'react';

const Navbar = () => {
  return (
     <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 md:px-12 py-3 flex items-center justify-between z-50">
      
      {/* Lado izquierdo: logo o imagen */}
      <div className="flex items-center gap-3">
        <img 
          src="/myAvatar.png" 
          alt="Cecilia" 
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <span className="text-lg font-semibold text-[var(--color-encabezados)]">Bienvenid@</span>
      </div>

      {/* Lado derecho: enlaces */}
      <div className="hidden md:flex items-center gap-8 text-[var(--color-encabezados)] font-medium">
        <a href="#about" className="hover:text-[var(--color-acento)] transition">Acerca de mí</a>
        <a href="#projects" className="hover:text-[var(--color-acento)] transition">Mis proyectos</a>
        <a href="#contact" className="hover:text-[var(--color-acento)] transition">Contacto</a>
      </div>

    </nav>
  );
};

export default Navbar;
