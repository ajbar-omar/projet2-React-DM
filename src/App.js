import {BrowserRouter as Router ,Switch , Route,Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router';
import {useRef} from 'react'
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import './index.css';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

export default function App(){
  


return (

<Router>
    <Switch>
   <Route exact path='/'>
     <Redirect to="/login"/>
     </Route>
   <Route path='/login'  ><Login/></Route>
   <Route path='/signup'  ><Signup/></Route>
   
   <Route exact path='/Home'  ><Home/> </Route>

   </Switch>
  </Router>
 
 



 
);

  }