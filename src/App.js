import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { initGA } from "./util/Track";

function App() {
  useEffect(() => {
    initGA();

  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
