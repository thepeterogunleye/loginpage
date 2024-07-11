import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='flex-col justify-center px-6 py-12  bg-black bg-opacity-20 rounded-lg md: lg:'>
            <div>
                <h1 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-white pb-3'>Login</h1>

                  <div className='flex items-center justify-between mx-3 p-2 text-white'>
                      <input type='text'  recquired className='placeholder:text-white size-full bg-transparent outline  outline-white text-white rounded-xl px-3 text-sm'placeholder='Username'/>
                  </div>
                  <div className='flex items-center justify-between mx-3 p-2 text-white'>
                      <input type='text'placeholder='Password'  recquired className='placeholder:text-white size-full bg-transparent outline  outline-white text-white rounded-xl px-3 text-sm'/>
                  </div>
                  <div className="flex justify-between p-3 mx-3 text-sm">
                      <label>
                          <input type="checkbox" className='outline-none border-none shadow-none accent-black '/>
                      </label>
                          <a href="#" className='text-white hover:text-black '>Forgot Password</a>
                    </div>
                    <div className='flex justify-center'>
                        <button type='Submit' className='rounded-full bg-white text-zinc-500 px-4  md:px-8  hover:bg-black'>Login</button>
                    </div>
                    </div>
                    
          </div>
      </div>
 )
}

export default Login