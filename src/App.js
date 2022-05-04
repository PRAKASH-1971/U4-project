import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "./components/Home";
import Guest from "./components/Guest";
import Credit from "./components/Credit";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/myaccount/orders' element={<Guest/>}/>
           <Route path='/myaccount/credits' element={<Credit/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
