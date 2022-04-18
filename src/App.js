import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Reagister from './Pages/Login/Reagister/Reagister';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reagister" element={<Reagister/>} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
