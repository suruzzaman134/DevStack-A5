import banner from "../../assets/banner-stack.png";

export default function Banner() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="w-full">
        <h1 className="text-2xl text-center md:text-left md:text-6xl font-bold">
          Build Your Ideal <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="text-center md:text-left text-gray-700 text-xl tracking-wide mt-3">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex justify-center md:justify-normal items-center gap-5 mt-6">
         <button className="gradient-btn px-5 py-2 rounded-2xl" >Explore Technologies</button>
        <button className="font-semibold border px-5 py-2 rounded-2xl border-gray-600">Learn More</button>
        </div>
      </div>

      <div className="w-full">
        <img className="w-full" src={banner} alt="" />
      </div>
    </div>
  );
}
