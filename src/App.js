import './App.css';
import CustomAppBar from './Component/CustomAppBar/CustomAppBar.js';
import { Routes, Route} from "react-router-dom";



function App() {

  return (
    <div className="App">
      <CustomAppBar/>
      <Routes>
      <Route path='/' element={<h1>First Pageomopjopmopmpompomopomomomomoop</h1>}/>
      <Route path='/create' element={<h1>crate acc</h1>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
