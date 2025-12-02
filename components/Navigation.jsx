import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-center pt-5 bg-transparent">
      <ul className="border-gray border-1 border-gray-600 flex bg-[#303030] justify-between w-full sm:w-1/2 px-7 rounded-full items-center text-[#d4d4d4] text-sm py-2">
        <li>
          <Link to="/services">Services</Link>
        </li>{" "}
        <li>
          <Link to="/news">News</Link>
        </li>
        <li className="text-2xl text-[#fdc835] flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              className="w-15"
              loading="eager"
              fetchpriority="high"
              alt="mcs-logo"
              style={{ contentVisibility: 'auto' }}
            />
          </Link>
        </li>
        <li>
          <Link to="/founder">Founder</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
