import React from 'react'
import {Routes , Route} from "react-router-dom"
import {Home , AboutUs, Contact,Committee ,Achivement,Event,News}from './Pages'


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<Contact/>}/>
        <Route path='/committee' element={<Committee/>}/>
        <Route path='/Achivement' element={<Achivement/>}/>
        <Route path='/Event' element={<Event/>}/>
        <Route path='/News' element={<News/>}/>
    </Routes>
  )
}

export default App
