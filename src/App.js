import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import {Appointment} from './Pages/Appointment/Appointment'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/appointment' element={<Appointment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
