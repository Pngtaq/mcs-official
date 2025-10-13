import Navigation from "../../components/Navigation";
import TopPage from "../../components/home/topPage";
function Home() {
  return (
    <div>
      <div className="bg-white rounded-b-[140px] flex flex-col ">
        <Navigation />
        <TopPage />
      </div>

      <div className="h-screen">domo</div>
    </div>
  );
}

export default Home;
