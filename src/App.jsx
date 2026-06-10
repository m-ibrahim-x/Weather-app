import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Map from './pages/Map';
import NotFound from './pages/error/NotFound';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='/map' element={<Map />} />
        <Route path ='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
