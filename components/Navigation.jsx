import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-center pt-5">
      <ul className="border-gray border-2 flex bg-[#303030] justify-between w-3/4 px-7 py-4 rounded-full items-center text-[#d4d4d4] text-sm">
        <li>
          <Link to="/services">Services</Link>
        </li>{" "}
        <li>
          <Link to="/">News</Link>
        </li>
        <li className="text-2xl text-[#fdc835] flex items-center">
          <Link to="/">MCS</Link>
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
