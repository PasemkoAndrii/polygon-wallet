import Web3 from "web3";
import { useState } from "react";
import { Button } from "@mui/material";

const web3 = new Web3(
  "https://site1.moralis-nodes.com/amoy/30b0cdbc36154b09a5b40ec1e00cc8c9",
);

export default function CreateAccountComponent() {
  const createAccount = async () => {
    const res = web3.eth.accounts.create();
    console.log(res);
    setAccountAddr({ addr: res.address, key: res.privateKey });
  };

  const [accountAddr, setAccountAddr] = useState({ addr: 1, key: 2 });

  return (
    <div>
      <h1>First Pageomopjopmopmpompomopomomomomoop</h1>
      <Button>rgergre</Button>
    </div>
  );
}
