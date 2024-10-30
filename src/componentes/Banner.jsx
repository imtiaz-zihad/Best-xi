import bimage from "../assets/images/banner-main.png";
import shadow from "../assets/images/bg-shadow.png"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Banner = ({handleReward}) => {
  

  return (
    <div
      className="relative w-4/5 mx-auto mt-16 text-center rounded-xl overflow-hidden bg-gradient-to-r from-indigo-900 via-red-600 to-yellow-400"
      
    >
     
      {/* Content Layer */}
      <div className="relative space-y-6 flex flex-col items-center justify-center py-28 bg-black/80 rounded-xl">
        <img className="w-32 h-32" src={bimage} alt="Banner Icon" />
        <h1 className="text-4xl font-extrabold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400 text-xl">Beyond Boundaries Beyond Limits</p>
        <button onClick={handleReward} className="bg-[#E7FE29] text-black font-bold py-2 px-4 border border-black rounded-lg hover:bg-yellow-300">
          Claim Free Credit
          <ToastContainer/>
        </button>
      </div>
    </div>
  );
};

export default Banner;
