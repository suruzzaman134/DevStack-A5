import logo from "../../assets/logo-text.png";
export default function Footer() {
  return (
    <div className="container py-5 text-gray-600">
      <div className="flex justify-between w-full">
        <div className="md:w-1/4 w-full flex-col flex justify-center items-center md:justify-normal md:items-start text-center md:text-left">
          <img src={logo} alt="" />
          <p className="my-4">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-4 items-center">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="text-black mb-3 font-bold uppercase">Product</h1>
          <ul>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h1 className="text-black mb-3 font-bold uppercase">Company</h1>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="text-black mb-3 font-bold uppercase">Legal</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <hr className="my-5 text-gray-500" />
      <div className="flex justify-between flex-wrap">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
}
