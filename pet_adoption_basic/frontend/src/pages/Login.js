import React, {useState} from 'react';
import axios from 'axios';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const submit = async e => { e.preventDefault(); try { const r = await axios.post((process.env.REACT_APP_API || 'http://localhost:5000') + '/api/auth/login',{email,password}); localStorage.setItem('token', r.data.token); alert('Logged in'); } catch(err){ alert('Login failed'); } };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /><br/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" /><br/>
        <button>Login</button>
      </form>
    </div>
  );
}
