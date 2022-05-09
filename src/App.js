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
import AuthProvider from './Pages/Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import ClientInfo from './Pages/Deshboard/Deshboard/ClientInfo/ClientInfo';
import Patients from './Pages/Deshboard/Patients/Patients';
import MakeAdmin from './Pages/Deshboard/AdminPanel/MakeAdmin/MakeAdmin';


function App() {
  return (
    <div className='App'> 
     <AuthProvider>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/deshboard/*" element={<Deshboard/>}> 
                  <Route path="clientdata" element={<ClientInfo/>}/>
                  <Route path="patients" element={<Patients/>}/>
                  <Route path="makeadmin" element={<MakeAdmin/>}/>
              </Route>
              <Route path="/reagister" element={<Reagister/>} />
              <Route path="/*" element={<PrivateRoute/>}>
                  <Route path="appointment" element={<Appointment/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
      </div>
  );
}

export default App;
