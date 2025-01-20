import './App.css';
import { Footer } from './components/footer-component/footer';
import { Game } from './components/game-component/game';
import { Header } from './components/header-component/header';

function App() {
  return (
    <>
      <Header />
      <Game/>
      <Footer />
    </>
  );
}

export default App;
