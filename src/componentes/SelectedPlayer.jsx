const SelectedPlayer = ({ player,handleRemoveData }) => {
    const {player_img, player_name, batting_hand} =player;
    return (
      <div className="p-4 border-3  border border-black rounded-2xl mt-5 shadow-2xl  flex justify-between items-center">
        <div className="flex gap-8">
            <div className="w-28 h-28 ">
                <img className="rounded-3xl w-full h-full"  src={player_img} alt="" />
            </div>
            <div className="text-2xl flex flex-col justify-center space-y-5">
                <h3 className="text-black">{player_name}</h3>
                <h3 className="text-gray-400">{batting_hand}</h3>
            </div>
        </div>
        <div>
            <h2 className="text-3xl text-red-600 mr-10 "
            onClick={()=>{
                handleRemoveData(player.id)
            }}
            ><i className="fa-solid fa-trash"></i></h2>
        
        </div>

        
      </div>
      

    );
  };
  
  export default SelectedPlayer;
  