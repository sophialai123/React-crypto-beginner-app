import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios"; //npm add  axios
import Coin from './components/Coin';

function App() {

  //useState will disply updated value on the page
  const [listOfCoins, setListOfCoins] = useState([]);

  //create useState for input:
  const [serachword, setSearchWord] = useState('');



  //useEffect will run everytime when the page redenders
  useEffect(() => {

    // get the API data by using Axios
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins); //return the data coins
      }
    );
  }, []); // put an empty array dependency ,otherwise will be infinite loop.


  //Create a fillter(function) to meet the search condition, set the search name and coin name into tolowercase.
  const fillteredCoins = listOfCoins.filter((coin) => {
    return (

      coin.name.toLowerCase().includes(serachword.toLowerCase())
    );



  });

  return (
    <div className="App">

      <div className='cryptoHeader'>
        {/* Search the coin value*/}
        <input type="text" placeholder='Search...' onChange={(event) => {
          setSearchWord(event.target.value)
        }} />
      </div>

      {/*Map through all the object data from fillteredcoins data*/}
      <div className='cryptoDisplay'>
        {fillteredCoins.map((coin) => {

          {/* Create Coin props here*/ }
          return <Coin
            name={coin.name}
            icon={coin.icon}
            price={coin.price}
            symbol={coin.symbol}
            rank={coin.rank}
            websiteUrl={coin.websiteUrl}
          />
        })}
      </div>

    </div>
  );
}

export default App;
