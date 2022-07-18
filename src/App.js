import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/share/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
