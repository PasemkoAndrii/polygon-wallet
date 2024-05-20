import Web3 from "web3";
import { useState } from "react";
import { Button, Typography, Divider } from "@mui/material";
import "./style.css";

const web3 = new Web3(
  "https://site1.moralis-nodes.com/amoy/30b0cdbc36154b09a5b40ec1e00cc8c9",
);

export default function CreateAccountComponent() {
  const createAccount = async () => {
    const res = web3.eth.accounts.create();
    console.log(res);
    setAccountAddr({ addr: res.address, key: res.privateKey });
  };

  const [accountAddr, setAccountAddr] = useState({ addr: "", key: "" });

  return (
    <div>
      <Button onClick={createAccount}>Create New Account</Button>
      <Divider sx={{ backgroundColor: "gray" }} variant="middle" />
      <Typography variant="h5">Account address:</Typography>
      <Typography variant="h6">{accountAddr.addr}</Typography>
      <Divider sx={{ backgroundColor: "gray" }} variant="middle" />

      <Typography variant="h5">Private key:</Typography>
      <Typography variant="h6">{accountAddr.key}</Typography>
    </div>
  );
}
