import { Suspense } from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Technologies from "./components/technoligies/Technologies";
import { ToastContainer } from "react-toastify";

function App() {
  const technologiesPromise = async() => {
      const res = await fetch("/data.json");
      const data = await res.json();
      return data
   }
   
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <Banner/>
      <Suspense fallback={<p className="text-2xl text-center p-5">Loading Data.....</p>}>
        <Technologies technologiesPromise={technologiesPromise()}/>
      </Suspense>
      <Footer/>
      <ToastContainer/>
    </>
  );
}

export default App;
