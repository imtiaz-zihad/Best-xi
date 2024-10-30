import Player from "./Player";
import SelectedPlayer from "./SelectedPlayer";


const Selected = ({ choose,handleRemoveData,addMorePlayer }) => {

    
  return (
    <div className="">
      
      <div>
        {choose.map((player) => (
          <SelectedPlayer key={player.id} handleRemoveData={handleRemoveData} player={player} />
        ))}
      </div>
      <button onClick={addMorePlayer}  className="btn btn-primary mt-16 mb-10 bg-green-500 text-black border-none">Add More Player</button>
    </div>
  );
};

export default Selected;
