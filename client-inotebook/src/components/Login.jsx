import React from 'react'

const Login = () => {
    const handleSubmit = async (e) => {
e.preventDefault();
const response = await fetch("http://localhost:4000/api/auth/login", {
    method : 'POST',
    headers: 
})
    }
  return (
    <div>
    <form>
  <div className="mb-3">
    <label htmlFor="email" className='form-label'>Email address</label>
    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className='form-label'>Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Login
