import { Link } from "react-router-dom";
import LogoutButton from "./Logout";
const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4 flex justify-between items-center shadow-md fixed w-full z-10">
      <Link to="/" className="text-white font-bold text-4xl">
        Ecommerce
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-blue-200">
          Home
        </Link>
        <Link to="/cart" className="text-white hover:text-blue-200">
          Cart
        </Link>
        <Link to="/contact" className="text-white hover:text-blue-200">
          Contact
        </Link>
        <LogoutButton>Logout</LogoutButton>
      </div>
    </div>
  );
};

export default Navbar;
