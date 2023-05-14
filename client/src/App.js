import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
