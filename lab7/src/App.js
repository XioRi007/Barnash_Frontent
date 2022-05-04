import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SliderPage from './pages/SliderPage';

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <SliderPage/>      
      </div>
      <Footer/>
    </>
  );
}

export default App;
