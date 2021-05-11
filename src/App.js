import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { initGA, GApageView } from "./util/Track";

function App() {
  useEffect(() => {
    initGA();
    GApageView(window.location.pathname);
  })

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
