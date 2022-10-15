import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About"
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
