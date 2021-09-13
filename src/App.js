import React, { useEffect } from 'react';
import './App.css';
import { initGA, GApageView } from "./util/Track";
import { Header } from './components/Header';
import Routes from './Routes';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    initGA();
    GApageView(window.location.pathname);
  })

  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
