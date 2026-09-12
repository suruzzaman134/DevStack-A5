import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo-text.png";

export default function Navbar() {
  return (
    <div className="py-5 text-gray-500 font-semibold">
      <div className=" container mx-auto flex justify-between items-center">
         <IoMdMenu className="md:hidden text-2xl" />
        <div>
          <img className="md:w-[150px]" src={logo} alt="logo" />
        </div>
        <ul className="gap-6 items-center hidden  md:flex">
          <li className="text-red-500">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <button>Sign In</button>
          <button className="gradient-btn px-5 py-2 rounded-2xl">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
