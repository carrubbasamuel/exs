import './App.css';
import Footer  from './Componet/jsx/footer'
import Navbar from './Componet/jsx/navbar';
import PexelsImg from './Componet/jsx/Pexels';

function App() {
  return (
    <>
    <Navbar />

    {/* GET data from pexels */}
    <PexelsImg />



    <Footer />
    
    
    
    </>
    
    
  );
}

export default App;
