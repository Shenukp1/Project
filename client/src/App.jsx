import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vehicle from './components/Vehicle'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import CustomerDashboard from './components/CustomerDashboard'
import { UserProvider } from './context/UserContext.jsx';

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
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
