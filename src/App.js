import './App.css';
import Header from './components/header/Header';
import data from './data/cardData';
import Footer from './components/footer/Footer';
import CardContainer from './components/cardContainer/CardContainer';

function App() {
  return (
    <>
    <Header title="Galeria de Imagenes con React"/>
    <CardContainer data={data} />
    <Footer text="Todos los derechos Reservados" />
    </>
  );
}

export default App;
