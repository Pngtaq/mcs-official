import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import MiddlePage from "../../components/home/MiddlePage";
import TopPage from "../../components/home/topPage";
function Home() {
  return (
    <div>
      <div className="bg-white rounded-b-[60px] sm:rounded-b-[140px] flex flex-col pb-20 lg:pb-0 2xl:min-h-screen justify-between">
        <Navigation />
        <TopPage />
      </div>

      <MiddlePage />
      <Footer />
    </div>
  );
}

export default Home;
