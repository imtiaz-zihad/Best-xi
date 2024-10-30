import profile from "../assets/images/logo.png";

const Header = ({addcredit}) => {
  
  
  return (
    <div className="flex  justify-between w-4/5 mx-auto pt-7 items-center">
      <div>
        <img src={profile} alt="" />
      </div>
      <div className="flex space-x-14 text-black items-center">
        <ul>Home</ul>
        <ul>FIxture</ul>
        <ul>Teams</ul>
        <ul>Schedules</ul>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 gap-2 rounded-xl inline-flex items-center">
        <span> {addcredit} Coin</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="fill-current w-8 h-8 mr-2"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="gold"
              stroke="orange"
              strokeWidth="4"
            />

            <circle
              cx="32"
              cy="32"
              r="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="24"
              fontFamily="Arial"
              fill="orange"
              fontWeight="bold"
            >
              $
            </text>
          </svg>

        
        </button>
      </div>
    </div>
  );
};

export default Header;
