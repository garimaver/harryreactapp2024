import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [credentials, setCredentials] = useState({name:"" ,email: "", password: "" , cpassword: ""});
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {name, email, password} = credentials;
      const response = await fetch("http://localhost:4000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        navigate('/');
      } else {
        alert("Invalid Credentials");
      }
    };
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div className="mb-3">
    <label htmlFor="name" className='form-label'>Name</label>
    <input type="name" name='name' className="form-control" onChange={onChange} id="name" aria-describedby="emailHelp"  placeholder="Enter Your Name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className='form-label'>Email address</label>
    <input type="email" name='email' className="form-control" onChange={onChange}  id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className='form-label'>Password</label>
    <input type="password" className="form-control" onChange={onChange} id="password"  name="password" placeholder="Password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className='form-label'>Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" placeholder="Confirm Password"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Signup
