import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner";
import Header from "./componentes/Header";
import PlayerContainer from "./componentes/PlayerContainer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Footer from "./componentes/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  const handleIsActiveState = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };
  const [addcredit, setAddCredit] = useState(0);

  const handleReward = () => {
    const newcredit = addcredit + 2000;
    setAddCredit(newcredit);
    notifyAdded("Credit Added To Your Account",<MdDone />,"",'text-green-500')
    
  };
  const notifyAdded =(text, icon,draft,textColor) =>{
    toast(
      <div className="flex gap-1 items-center"> 
        <h1 className={`text-3xl ${textColor}`}>{icon}</h1>
        <h1 className="text-base ">{text}</h1>
        <h1 className="text-base">{draft}</h1>
      </div>
    )
    
  }

  const [choose, setChoose] = useState([]);

  const handleChoosePlayer = (player, price) => {
    const isExites = choose.find(
      (previousPlayer) => previousPlayer.id === player.id
    );
    if (!isExites) {
      if (addcredit < player.price) {
        notifyAdded("Low Balance",<TiDeleteOutline />," in your account",'text-red-500')
      } else {
        
        if (choose.length>5) {
          notifyAdded("Maximum Player",<TiDeleteOutline />,"  added",'text-red-500')
        }else{

          const remainingCredit = addcredit - price;
        setAddCredit(remainingCredit);

        const newSelected = [...choose, player];
        setChoose(newSelected);
        notifyAdded(player.player_name,<MdDone />,"added in squad",'text-green-500')
        }
      }
    } else {
      notifyAdded("Already added",<TiDeleteOutline />,"",'text-red-500')
      
    }
  };
const [newlist, setNewList]= useState([])
  const handleRemoveData = (id) =>{
    const deletedPlayer = choose.find((cho) => cho.id === id);

    const updatePlayer= choose.filter((cho) => cho.id !== id)
    setChoose(updatePlayer);
    setNewList([...newlist, deletedPlayer])

    notifyAdded("Deleted",<MdDelete />,"",'text-red-500')

  }
  

  return (
    <>
      <div>
        
        
      <Header addcredit={addcredit}></Header>
      <Banner handleReward={handleReward}></Banner>
      <PlayerContainer
      
      handleRemoveData={handleRemoveData}
        choose={choose}
        handleChoosePlayer={handleChoosePlayer}
        isActive={isActive}
        handleIsActiveState={handleIsActiveState}
      ></PlayerContainer>
      <Footer></Footer>
      
      </div>
    </>
  );
}

export default App;
