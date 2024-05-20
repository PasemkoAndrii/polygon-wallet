import "./App.css";
import CustomAppBar from "./Component/CustomAppBar/CustomAppBar.js";
import CreateAccountComponent from "./Component/CreateAccount/CreateAccount.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      <Routes>
        <Route path="/" element={CreateAccountComponent} />
        <Route path="/create" element={CreateAccountComponent} />
      </Routes>
    </div>
  );
}

export default App;
