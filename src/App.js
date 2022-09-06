import logo from "./logo.svg";
import "./App.css";
import landingPage from "./pages/landingPage";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Card from "./components/card/Card";

function App() {
  return (
    <div>
      {/* <landingPage/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/ankur/vekariya" element={<Contact />} />
          <Route path="/card" element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
