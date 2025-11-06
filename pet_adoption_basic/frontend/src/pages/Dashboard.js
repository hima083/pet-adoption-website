import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Dashboard(){
  const [adoptions,setAdoptions]=useState([]);
  useEffect(()=>{ const t = localStorage.getItem('token'); if(!t) return; axios.get((process.env.REACT_APP_API || 'http://localhost:5000') + '/api/adoptions/me', {headers:{Authorization:'Bearer '+t}}).then(r=>setAdoptions(r.data)).catch(()=>{}); },[]);
  return (
    <div>
      <h2>Your Adoptions / Requests</h2>
      <ul>
        {adoptions.map(a=>(
          <li key={a._id}>{a.pet?.name} - {a.status}</li>
        ))}
      </ul>
    </div>
  );
}
