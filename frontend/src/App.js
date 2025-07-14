import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Newsletter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;