import {Routes, Route} from "react-router-dom"
import NavBar from '../components/NavBar'
import Home from '../views/Home';
import Contacto from '../views/Contacto';
import Footer from "../components/Footer";


const AppRouter = () => {

    const routes = [
        {to: "/", linkText: "Home"},
        {to: "/contacto", linkText: "Contacto"}
    ]

  return (<>
    <NavBar routes={routes}/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default AppRouter