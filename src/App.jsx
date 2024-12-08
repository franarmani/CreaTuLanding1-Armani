import Navbar from './components/navbar';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">

      <Navbar />


      <Banner />

      <ItemListContainer message="NEW DROP" />

      <Footer />

    </div>
  );
}

export default App;
