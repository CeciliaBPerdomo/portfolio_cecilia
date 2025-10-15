import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './themeSlice';
import { themeColors } from '../../../styles/theme';

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Cargar tema desde localStorage al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme === 'true') {
      dispatch(setTheme(true));
    } else {
      dispatch(setTheme(false));
    }
  }, [dispatch]);

  // Aplicar las variables CSS según el tema actual
  useEffect(() => {
    const currentTheme = isDarkMode ? 'dark' : 'light';
    const colors = themeColors[currentTheme];

    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Guardar en localStorage
    localStorage.setItem('isDarkMode', isDarkMode);

    // Aplicar atributo data-theme para styled-components
    root.setAttribute('data-theme', currentTheme);
  }, [isDarkMode]);

  return children;
};

export default ThemeProvider;
