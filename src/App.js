import React, { useEffect } from 'react';
import './App.css';

import Homepage from "./pages/Homepage";
import About from "./pages/About"
import { initGA, GApageView } from "./util/Track";

function App() {
  useEffect(() => {
    initGA();
    GApageView(window.location.pathname);
  })

  return (
    <div className="App">
      <Homepage/>

      <About />

    </div>
  );
}

export default App;
