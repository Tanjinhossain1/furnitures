import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Home from './components/Home/Home';
import Footer from './components/share/Footer';
import Navbar from './components/share/Navbar';
import { connect } from "react-redux";
import { startAction } from './actions/startAction';
import { stopAction } from './actions/stopAction';
import Login from './components/Login/Login';
import SignUp from './components/Login/signUp';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init({})
    },[])
  return (
    <div className='scroll-m-10'>
     <Navbar  />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
     </Routes>

     <Footer />
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});
// export default App;
// export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
