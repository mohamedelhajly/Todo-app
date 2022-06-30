
//import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
//import UserRegister from './comp/API/main';
import NewUser from './comp/Newuser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route , Routes , NavLink ,  BrowserRouter as Router} from 'react-router-dom'
import Loginuser from './comp/Loginuser';
import NotFound from './comp/NotFound';
import Todo from './comp/Todo';

export default class app extends Component {
render(){
  return (
    <Router>
      <nav className='appp'>
            <NavLink to="/Login">Login here</NavLink>
            <NavLink to="">---------</NavLink>
            <NavLink to="/">Registre</NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<NewUser/>} />
        <Route exact path="/Login" element={<Loginuser/>} />
        <Route exact path="*" element={<NotFound/>}/>
        <Route exact path="/Todo" element={<Todo/>} />
          </Routes>

    </Router>
    )
}
}