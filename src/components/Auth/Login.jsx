import { useState } from "react";

const Login = ({ handelLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    handelLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex flex-col items-center justify-center gap-12 h-screen w-screen'>
      <h3 className="font-medium text-4xl tracking-wide border-b-2 border-emerald-500" style={{ fontFamily: 'Poppins' }}>
        LogIn Page
      </h3>
      <form action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex flex-col gap-2'>
        <input required
          type="email" name='email' placeholder='Enter your email'
          className='px-6 py-3 border-emerald-400 border-2 outline-none rounded-full bg-transparent'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input required
          type="password" name="password" id="" placeholder='Enter password'
          className='px-6 py-3 border-emerald-400 border-2 outline-none rounded-full bg-transparent'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit"
          className='px-6 py-2 mt-2 border-none rounded-full bg-emerald-500 cursor-pointer active:scale-95'>
          Log in</button>
      </form>
    </div>
  )
}

export default Login
