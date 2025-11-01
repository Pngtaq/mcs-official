import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Founder from "./pages/Founder";
import Team from "./pages/Team";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
			<Route path="/news" element={<News />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
