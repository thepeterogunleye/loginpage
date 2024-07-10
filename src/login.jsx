import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='border-box '>
    <div className=''>
      <h1>Login</h1>
      <div>
        <input type='text' placeholder='Username' recquired />
      </div>
      <div>
        <input type='text' placeholder='Username' recquired />
      </div>
      <div class="remember">
              <label>
                <input type="checkbox"/>
              </label>
              <a href="#">Forgot Password</a>
          </div>
          <button type='Submit'>Login</button>
    </div>
  </div></div>
  )
}

export default Login