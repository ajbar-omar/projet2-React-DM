import {useRef} from 'react'
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';

export default function Login(){
  const history =useHistory();  
  const enteredUsername =  useRef();
    const enteredPassword =  useRef();
    const handleSubmit = (e) =>{
    e.preventDefault(); 
      
    const username=enteredUsername.current.value;
    const password=enteredPassword.current.value;
    
  const body = {
    username: username,
    password: password,
  }

  axios.get("http://localhost:3007/users").then(
    user=>{
      user.data.map(u=>{
        if(u.username==body.username && u.password==body.password){

history.replace("/Home") }
      })
    }
  )
}

    return (


        
        <div className="container">
<form onSubmit={handleSubmit} className="bg p-2 rounded-lg">  

<h2 className="text-center text-white" >Login</h2>

<div className="form-group w-40 mx-sm-3 mb-2 ">

<label htmlFor="username" className="un text-white">Username</label>

<input id="username" className="input form-control" type="text" ref={enteredUsername} />
</div>



<div className="form-group w-40 mx-sm-3 mb-2 ">

<label htmlFor="password" className="un text-white">Password</label>

<input id="password" className="input" className="input form-control" type="password" ref={enteredPassword} />
</div>




< button className="btn btn-outline-success text-white" type="submit"> submit </ button>

  </form>
 <Link to='/signup' className="link-dark tos">to signup
 </Link>
</div>    
)
}