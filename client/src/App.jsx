import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vehicles from './components/Vehicles'
import Login from './components/Login'
import Dashboard from './components/Dashboard'



function App() {
  

  return (
    <BrowserRouter>
     <Navbar></Navbar> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/vehicles' element={<Vehicles/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
