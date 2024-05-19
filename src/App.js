import './App.css';
import Web3 from "web3";
import { useState } from "react";
import { CustomAppBar } from './Component/CustomAppBar/CustomAppBar.js';
const web3 = new Web3(

  "https://site1.moralis-nodes.com/amoy/30b0cdbc36154b09a5b40ec1e00cc8c9"

);


function App() {
  const createAccount = async () => {
    const res = web3.eth.accounts.create();
    console.log(res);
    setAccountAddr({ addr: res.address, key: res.privateKey });
  };

  const [accountAddr, setAccountAddr] = useState({ addr: 1, key: 2 });

  return (
    <div className="App">
      <h1>First Pageomopjopmopmpompomopomomomomoop</h1>
      <h1>Second Page</h1>
      <h1>Third Page</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
      <h1>wfwfwefwef</h1>
    </div>
  );
}

export default App;
