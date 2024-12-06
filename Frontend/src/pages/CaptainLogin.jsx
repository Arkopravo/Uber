import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
        email: email,
        password: password
    })
    // console.log(captainData);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      
      <div>
        <img
          className='w-20 mb-3'
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber-logo"
        />
        <form
            onSubmit={(e) => submitHandler(e)}
        >
          <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
          <input 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='email@example.com'
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
            required 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='enter password'
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          />

          <button 
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >
            Login as Captain
          </button>

          <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div>

      <div>
        <Link to="/login"
          className='bg-[#d5622d] text-white flex items-center justify-center font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign in as User
        </Link>
      </div>

    </div>
  )
}

export default CaptainLogin;