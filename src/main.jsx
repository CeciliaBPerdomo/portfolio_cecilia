import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Estilos globales
import { GlobalStyles } from './styles/Globales.js';


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import ThemeProvider from "./redux/tema/ThemeProvider.js";

createRoot(document.getElementById('root')).render(
   <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
)
