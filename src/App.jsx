import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
