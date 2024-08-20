// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './Components/About Us/AboutUs'
import ContactForm from './Components/Consulation/ContactForm'
import ErrorMessage from './Components/Error Message/ErrorMessage'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import ScrollToTop from './Components/Scroll To Top/ScrollToTop'
import SingleProduct from './Components/Single Product/SingleProduct'
import WishList from './Components/WishList/WishList'
import { WishListProvider } from './ContextApi/WishlistContext'
import Cart from './Components/Cart/Cart'
import { CartProvider } from './ContextApi/CartContext'
import Project from './Components/Projects/Project'
import IndividualProject from './Components/Projects/IndividualProject'

function App() {
  
  return (
  <CartProvider>
    <WishListProvider>
    <BrowserRouter>
      <Header></Header>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/products/:category' element={<Products/>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/product/:id' element={<SingleProduct></SingleProduct>}></Route>
          <Route path='/*' element={<ErrorMessage></ErrorMessage>}></Route>
          <Route path='/consultation' element={  <ContactForm></ContactForm>}></Route>
          <Route path='/wishlist' element={<WishList></WishList>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/projects' element={<Project></Project>}></Route>
          <Route path='/individual-project' element={<IndividualProject/>}></Route>
          
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </WishListProvider>
    </CartProvider>
    

  )
}

export default App
