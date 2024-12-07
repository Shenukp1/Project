import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vehicle from './components/Vehicle'
import Login from './components/Login'



function App() {
  

  return (
    <BrowserRouter>
     <Navbar></Navbar> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/vehicle' element={<Vehicle/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
