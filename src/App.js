import React from 'react'
import {Routes , Route} from "react-router-dom"
import {Home , AboutUs, Contact,NewCommittee ,PastCommittee,Achivement,Event,News}from './Pages'


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<Contact/>}/>
        <Route path='/committee/newcommitte' element={<NewCommittee/>}/>
        <Route path='/committee/pastcommitte' element={<PastCommittee/>}/>
        <Route path='/Feed/Achivement' element={<Achivement/>}/>
        <Route path='/Feed/Event' element={<Event/>}/>
        <Route path='/Feed/News' element={<News/>}/>
    </Routes>
  )
}

export default App
