import Players from "./Players";
import Selected from "./Selected";

const PlayerContainer = ({
  handleIsActiveState,
  isActive,
  handleChoosePlayer,
  choose,
  handleRemoveData,
  
}) => {

    const addMorePlayer = () => {
        handleIsActiveState("available"); 
      };

  return (

   
    <div className="w-4/5 mx-auto">
      <div className=" flex text-3xl font-bold xl mt-8 items-center justify-between">
        <div className="text-black">
          <h1> {
        isActive.available?"Available Players": `Choose player : (${choose.length}/6)`               
      }</h1>
          
        </div>
        <div className="flex gap-2 text-black">
          <button
            className={`${isActive.available ? "btn active" : "btn"}`}
            onClick={() => handleIsActiveState("available")}
          >
            Available
          </button>
          <button
            className={`${isActive.available ? "btn" : "btn active"}`}
            onClick={() => handleIsActiveState("selected")}
          >
            Selected ({choose.length})
          </button>
        </div>
      </div>

      {isActive.available ? (
        <Players handleChoosePlayer={handleChoosePlayer} choose={choose}></Players>
      ) : (
        <Selected
        addMorePlayer = {addMorePlayer }
         
          choose={choose}
          handleRemoveData={handleRemoveData}
        ></Selected>
      )}
    </div>
  );
};

export default PlayerContainer;
