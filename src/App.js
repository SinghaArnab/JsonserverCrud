import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Showdata from './components/Showdata';
import UpdateData from './components/UpdateData';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Register/>}/>
        <Route path='/showdata' element={<Showdata/>}/>
        <Route path='/showdata/:id' element={<UpdateData/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
