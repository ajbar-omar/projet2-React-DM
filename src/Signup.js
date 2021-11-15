import {useRef} from 'react'
import {BrowserRouter as Router ,Switch , Route,Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import './index.css';

export default function Signup(){
    // const {register, handleSubmit, errors } = useForm();
  const enteredUsername =  useRef();
  const enteredEmail =  useRef();
  const enteredPassword =  useRef();
  const handleSubmit = (e) =>{e.preventDefault(); 
    
    const username=enteredUsername.current.value;
  const email=enteredEmail.current.value;
  const password=enteredPassword.current.value;
  
const body = {
  username: username,
  email: email,
  password: password,
}

  console.log(body)

  axios.post("http://localhost:3007/users",body).then(alert("success"))
  
}
    return(
<div className="container2">
<form onSubmit={handleSubmit} className="bg2 bg-primary p-2 rounded-lg">  

      <h2 className="text-center text-white" >Signup</h2>

    <div className="form-group w-40 mx-sm-3 mb-2 ">

           <label htmlFor="username" className="un text-white">Username</label>
      
          <input id="username" className="input form-control" type="text" ref={enteredUsername} />
    </div>
    
    <div className="form-group w-40 mx-sm-3 mb-2 ">

           <label htmlFor="email" className="un text-white">Email</label>
      
          <input id="email" className="input" className="input form-control" type="email" ref={enteredEmail} />
    </div>
   
    <div className="form-group w-40 mx-sm-3 mb-2 ">

           <label htmlFor="password" className="un text-white">Password</label>
      
          <input id="password" className="input" className="input form-control" type="password" ref={enteredPassword} />
    </div>
        
 < button className="btn btn-outline-success text-white" type="submit"> submit </ button>
  </form>
  <Link to='/Login' className="hac">
already have an account!
 </Link>

</div>
    )     
}
