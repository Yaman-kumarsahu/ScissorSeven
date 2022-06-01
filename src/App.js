import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Season1 from "./Components/Season1";
import Season2 from "./Components/Season2";
import Season3 from "./Components/Season3";
//import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Introduction />} />
          <Route path="" element={<Introduction />} />
          <Route path="/Season-1" element={<Season1 />} />
          <Route path="/Season-2" element={<Season2 />} />
          <Route path="/Season-3" element={<Season3 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
