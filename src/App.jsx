import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Boost from "./components/boost-section/Boost";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Boost />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
