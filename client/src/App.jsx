import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vehicle from './components/Vehicle'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import CustomerDashboard from './components/CustomerDashboard'
import AddVehicle from './components/AddVehicle.jsx'
import AddCustomer from './components/AddCustomer.jsx';
import Logout from './components/Logout.jsx';
import VehicleEdit from './components/VehicleEdit.jsx';
import VehicleDelete from './components/VehicleDelete.jsx';
import AddReservation from './components/AddReservation.jsx';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customerDashboard" element={<CustomerDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/addVehicle" element={<AddVehicle/>} />
          <Route path="/addCustomer" element={<AddCustomer/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/vehicle/:id" element={<VehicleEdit/>} />
          <Route path="/delete/:id" element={<VehicleDelete/>} />
          <Route path="/reservation" element={<AddReservation/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
