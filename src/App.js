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
import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import ClientInfo from './Pages/Deshboard/Deshboard/ClientInfo/ClientInfo';
import Patients from './Pages/Deshboard/Patients/Patients';
import PrivateRoute from './Pages/ReactRoute/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/ReactRoute/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Deshboard/AdminPanel/MakeAdmin/MakeAdmin';
import AllAppointment from './Pages/Deshboard/PatientDetails.js/AllAppointment';
import ContactUs from './Pages/Contact/ContactUs';


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
                <Route path="patients" element={<Patients/>}/>  
                <Route path="*" element={<ClientInfo/>}/>
                  <Route path="*" element={<AdminRoute/>}> 
                    <Route path="allAppointment" element={<AllAppointment/>}/>
                    <Route path="makeadmin" element={<MakeAdmin/>}/>
                  </Route>
              </Route>
              <Route path="/reagister" element={<Reagister/>} />
              <Route path="/*" element={<PrivateRoute/>}>
                  <Route path="appointment" element={<Appointment/>}/>
                  <Route path="contact" element={<ContactUs/>} />
              </Route>
            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
      </div>
  );
}

export default App;
