import './App.css'
import Rutas from './rutas/rutas'
import Layout from "./componentes/Layout/Layout"
import Navbar from "./componentes/Navbar/Navbar"
import Footer from "./componentes/Footer/Footer"

function App() {

  return (
    <>
      <Layout>
        {/* navbar */}
        <Navbar />

        {/* rutas */}
        <Rutas />

        {/* footer */}
        <Footer />
      </Layout>
    </>
  )
}

export default App
