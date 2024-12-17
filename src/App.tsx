import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CulturalEvents from "./pages/CulturalEvents";
import Fezan from "./pages/Fezan";
import NameMeaning from "./pages/NameMeaning";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import ContactPage from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Events from './pages/Events';

function App() {
  

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Router>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/calendar" element={<Calendar/> }/>
          <Route path="/culturalevents" element={<CulturalEvents/> }/>
          <Route path="/fezan" element={<Fezan/> }/>
          <Route path="/name-meaning" element={<NameMeaning/> }/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/> }/>
          <Route path="/disclaimer" element={<Disclaimer/> }/>
          <Route path="/contact" element={<ContactPage/> }/>
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;