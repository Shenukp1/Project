import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vehicle from './components/Vehicle'
import Login from './components/Login'
import Dashboard from './components/Dashboard'



function App() {
  

  return (
    <BrowserRouter>
     <Navbar></Navbar> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/vehicle' element={<Vehicle/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
