import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Potter from './components/projects/Potter'
import Battleships from './components/projects/Battleships'
import Foodstagram from './components/projects/Foodstagram'
import Wanderlust from './components/projects/Wanderlust'
import Story from './components/projects/Story'

const App = () => {
  return (
    <div id="wrapper">
      <BrowserRouter>
        {/* <Socials /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Potter" element={<Potter />} />
          <Route path="/Battleships" element={<Battleships />} />
          <Route path="/Foodstagram" element={<Foodstagram />} />
          <Route path="/Wanderlust" element={<Wanderlust />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
