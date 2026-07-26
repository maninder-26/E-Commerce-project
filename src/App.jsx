import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Pages/Cart'
import { LogIn } from 'lucide-react'
import Login from './Components/Login'
import Product from './Pages/Product'
import Shopcategory from './Components/Shopcategory'
import Footer from './Components/Footer/Footer'
import banner from '../src/assets/banner.jpg'
import womenbanner from '../src/assets/women_banner.avif'
import kidsbanner from '../src/assets/kids_banner.jpg'


const App = () => {
const [Location, setLocation] = useState()


  const getLocation = async ()=>{
    navigator.geolocation.getCurrentPosition( async pos =>{
      const {latitude , longitude} =  pos.coords
      console.log(latitude , longitude);
      

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try{
        const location = await axios.get(url)
       const exactlocation = location.data.address  
       setLocation(exactlocation)   
       console.log(exactlocation);
         

      }catch (Error){;
      
      console.log(Error);
      

      }
    })
  }
 useEffect(()=>{
  getLocation()
 } ,[])

  return (
    <div >
      <Navbar Location = {Location}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Men' element={<Shopcategory banner={banner}  category='men'/>} />
        <Route path='/Women' element={<Shopcategory banner={womenbanner} category='women'/>} />
        <Route path='/Kids' element={<Shopcategory banner={kidsbanner} category='kid'/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Product/:ProductId' element={<Product/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App