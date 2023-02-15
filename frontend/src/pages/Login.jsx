import React from 'react'

import './Login.css'

function Login() {

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Log In</h1>
        <form >
            <div className='input-container'>
                <label>Username</label>
                <input type='text' name='username' placeholder='Username' />
            </div>
            <div className='input-container'>
                <label>Password</label>
                <input type='password' name='password' placeholder='Password' />
            </div>
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
