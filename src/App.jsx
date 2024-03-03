
import './App.css'
import Chicken from "./Chicken"
import Slots from "./Slots"
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import ColorBoxes from './ColorBoxes';

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
  
 const colors = ["#e21b5a", "#9e0c39", "#6c5b7b", "#f8b195" ,"#355c7d", "#fa6900", "#d6a692","#5e2f46","#7ab317","#fd0a54","#14c3a2","#00b4fc","#ef9ca4", "#f6e5cb","#fedc57","#99b333" ];

function App() {
  return (
    <div className='App'>
      {/* <Chicken/>
      <Chicken/>
      <Chicken/>
      <Slots val1="A" val2="A" val3="A"/>
      <Slots val1="A" val2="B" val3="A"/> */}
   {/* <PropertyList properties={properties}/>  */}
   {/* <Clicker message="HI!!!" buttonText="Please Click Me"/>
   <Clicker message="Please Stop Clicking Me!" buttonText="do not click"/> */}
   <ColorBoxes colors={colors}/>
    </div>
  );
}

export default App
