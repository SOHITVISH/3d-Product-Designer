// 1. Components are JavaScript Function
// 2. Function name must start with uppercase letter
// 3. Function must return single JSX element.
// 4. Function must be exported from its file.

import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button className='btn btn-primary'>Hello React</button>
    </div>
  )
}

export default Login