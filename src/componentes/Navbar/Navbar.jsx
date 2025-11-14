import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/tema/themeSlice'; // 🔁 importa la acción
import { Moon, Sun } from 'lucide-react'; // npm install lucide-react si no lo tenés

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--espacio-blanco)] shadow-md px-6 md:px-12 py-3 flex items-center justify-between z-50 transition-colors duration-300">

      {/* Lado izquierdo: logo o imagen */}
      <a href="/" className="flex items-center gap-3">
        <img
          src="/myAvatar.png"
          alt="Cecilia"
          className="w-12 h-12 rounded-full object-cover border border-[var(--color-encabezados)] cursor-pointer"
        />
        <span className="text-lg font-semibold text-[var(--color-encabezados)]">
          Bienvenid@
        </span>
      </a>

      {/* Lado derecho: enlaces + ícono dark mode */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="hover:text-[var(--color-acento)] text-[var(--color-encabezados)] transition">
            Acerca de mí
          </a>
          <a href="#projects" className="hover:text-[var(--color-acento)] text-[var(--color-encabezados)] transition">
            Mis proyectos
          </a>
          <a href="#contact" className="hover:text-[var(--color-acento)] text-[var(--color-encabezados)] transition">
            Contacto
          </a>
        </div>

        {/* Botón de modo oscuro / claro */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-full bg-[var(--espacio-blanco)] hover:bg-[var(--bloques)] transition-transform hover:scale-110"
          aria-label="Cambiar tema"
        >
          {mode === 'dark' ? (
            <Sun size={22} className="text-[var(--color-encabezados)]" />
          ) : (
            <Moon size={22} className="text-[var(--color-encabezados)]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
