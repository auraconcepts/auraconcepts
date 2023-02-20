import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { OurWork } from "./pages/OurWork";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./pages/Contact";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    
      {location.pathname!="/contacts" && <Footer/>}
    </div>
  );
}

export default App;
