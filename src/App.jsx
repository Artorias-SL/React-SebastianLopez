import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from './components/footer/Footer';
function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greetings="Bienvenido Usuario"/>
      <Footer/>
    </div>
  )
}

export default App
