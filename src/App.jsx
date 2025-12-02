import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Founder from "./pages/Founder";
import Team from "./pages/Team";
import News from "./pages/News";
import NewsDetail from "../components/newsPage/NewsDetail";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import { NewsProvider } from "../contexts/NewsContext";

function App() {
  return (
    <Router>
      <NewsProvider>
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
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </NewsProvider>
    </Router>
  );
}

export default App;
