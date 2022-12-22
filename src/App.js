import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import Reagister from './Pages/Login/Reagister/Reagister';
import AuthProvider from './Pages/Contexts/AuthProvider/AuthProvider';
import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import PrivateRoute from './Pages/ReactRoute/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/ReactRoute/AdminRoute/AdminRoute';
import ClientInfo from './Pages/Deshboard/Deshboard/ClientInfo/ClientInfo';
import AllUserData from './Pages/Deshboard/UserDataAll/AllUserData';
import UserSide from './Pages/UserDataLoadDesh/UserGiveData/UserSide';



function App() {
  return (
    <div className='App'> 
     <AuthProvider>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reagister" element={<Reagister />} />
              <Route path="/deshboard/*" element={<Deshboard/>}> 

                <Route path="*" element={<ClientInfo/>}/>
                  <Route path="*" element={<AdminRoute/>}> 
                    <Route path="allUserData" element={<AllUserData/>}/>
                  </Route>
              </Route>
              <Route path="/reagister" element={<Reagister/>} />
              <Route path="/*" element={<PrivateRoute/>}>
                  <Route path="userSide" element={<UserSide/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
      </div>
  );
}

export default App;
