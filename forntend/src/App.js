import React from 'react'
import {Routes , Route} from "react-router-dom"
import {Home , AboutUs, Contact,NewCommittee ,PastCommittee,Achivement,Admin,PostUpload,PostView,PastEvent,Upcoming}from './Pages'


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<Contact/>}/>
        <Route path='/committee/newcommitte' element={<NewCommittee/>}/>
        <Route path='/committee/pastcommitte' element={<PastCommittee/>}/>
        <Route path='/Event/Achivement' element={<Achivement/>}/>
        <Route path='/Event/PastEvent' element={<PastEvent/>}/>
        <Route path='/Event/UpComingEvent' element={<Upcoming/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/postUpload' element={<PostUpload/>}/>
        <Route path='/admin/postView' element={<PostView/>}/>
    </Routes>
  )
}

export default App
