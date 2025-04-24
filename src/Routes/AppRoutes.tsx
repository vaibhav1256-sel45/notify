
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import LoginCard from '../Components/Login/Login'
import HomePage from '../Components/Home/Home'


function AppRoutes() {
  return (
       <BrowserRouter>
         <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
    
      <Route path='/login' element={<LoginCard/>}/>
      </Routes>
         </BrowserRouter>
  )
}

export default AppRoutes