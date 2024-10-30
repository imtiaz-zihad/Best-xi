const Player = ({player, handleChoosePlayer}) => {

  const {
    id,
    player_img,
    player_name,
    nationality,
    player_position,
    batting_hand,
    price,
  } = player;
 
  
  return (
    <div className=" rounded-lg mt-11   ">
      <div className="card bg-base-100  shadow-xl border-2">
        <figure className="px-10 pt-10">
          <img className
            src={player_img}
            alt="Shoes"
            className="rounded-xl w-full h-96"
          />
        </figure>
        <div className="card-body ml-4 ">
          <div className="flex items-center gap-5 ">
            <i className="fa-regular fa-user"></i>
            <h2 className="card-title">{player.player_name}</h2>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5  items-center">
              <i className="fa-solid fa-flag"></i>
              <h4>{nationality}</h4>
            </div>
            <div>
              <button className="btn btn-primary bg-gray-100 text-black border-none">
                 {player_position}
              </button>
            </div>
          </div>
          <hr />
          <h3 className="text-xl font-bold ">Rating</h3>
          <h3 className="text-xl font-bold ">{batting_hand}</h3>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Price:${price}</h2>
            <button onClick={() => handleChoosePlayer(player,price)} className="btn btn-primary bg-gray-100 text-black border-none">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
