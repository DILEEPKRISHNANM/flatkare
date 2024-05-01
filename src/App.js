
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Accountdelete from './components/Accountdelete';


function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/account-deletion' element={ <Accountdelete />}/>
        </Routes>


    </BrowserRouter>
  );
}

export default App;
