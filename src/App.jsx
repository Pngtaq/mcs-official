import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Founder from "./pages/Founder";
import Team from "./pages/Team";
import News from "./pages/News";
import NewsDetail from "../components/News/NewsDetail";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
