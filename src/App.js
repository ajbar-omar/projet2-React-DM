import {useRef} from 'react'
// import { useForm } from 'react-hook-form';
import content from './static';
export default function App(){
  // const {register, handleSubmit, errors } = useForm();
  const enteredUsername =  useRef();
  const enteredEmail =  useRef();
  const enteredPassword =  useRef();
  const handleSubmit = (e) =>{e.preventDefault(); 
    
    const username=enteredUsername.current.value;
  const email=enteredEmail.current.value;
  const password=enteredPassword.current.value;
  
const body = {
  username: enteredUsername.current.value,
  email: enteredEmail.current.value,
  password: enteredPassword.current.value
}
console.log(body)
};
return (
    
        <form onSubmit={handleSubmit}>  

        <h2>Signup</h2>
 
      <div>

             <label htmlFor="username">Username</label>
        
            <input id="username"    className="input" type="text" ref={enteredUsername} />
      </div>
      <div>

             <label htmlFor="email">Email</label>
        
            <input id="email"    className="input" type="email" ref={enteredEmail} />
      </div>
      <div>

             <label htmlFor="password">Password</label>
        
            <input id="password"   className="input" type="password" ref={enteredPassword} />
      </div>
          
        
      
    
   < button className="btn" type="submit">
      submit
    </ button>
    </form>
    
);
  }