import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import News from './Components/NewsComponent/News'
import { Routes, Route  } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>   {/* passing props for routing from navbar */}
        <Route path='/' element={<News key="business" pageSize={6} category = "business" />}></Route>
        <Route path='/entertainment' element={<News key="entertainment" pageSize={6} category = "entertainment" />}></Route>
        <Route path='/general' element={<News key="general" pageSize={6} category = "general" />}></Route>
        <Route path='/health' element={<News key="health" pageSize={6} category = "health" />}></Route>
        <Route path='/science' element={<News key="science" pageSize={6} category = "science" />}></Route>
        <Route path='/sports' element={<News key="sports" pageSize={6} category = "sports" />}></Route>
        <Route path='/technology' element={<News key="technology" pageSize={6} category = "technology" />}></Route>
      </Routes>
      <News/>
    </div>
  )
}

export default App
