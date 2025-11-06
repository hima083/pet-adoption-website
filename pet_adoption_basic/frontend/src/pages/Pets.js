import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Pets(){
  const [pets, setPets] = useState([]);
  useEffect(()=>{ axios.get(process.env.REACT_APP_API || 'http://localhost:5000/api/pets').then(r=>setPets(r.data)).catch(()=>{}); },[]);
  return (
    <div>
      <h2>Available Pets</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12}}>
        {pets.map(p=>(
          <div key={p._id} style={{border:'1px solid #ddd', padding:10, borderRadius:8}}>
            <h3>{p.name}</h3>
            <p>{p.species} - {p.breed}</p>
            <p>{p.description}</p>
            <p>Age: {p.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
