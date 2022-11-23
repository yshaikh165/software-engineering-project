import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Reservation from './components/Reservation'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Reservation' element={<Reservation/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
