import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
  const [Jokes, setjokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>[
      console.log("error")
    ])
  })
  return (
    <>
    <h1>Full stack demo</h1>
    <p>Jokes: {Jokes.length}</p>
    {Jokes.map((joke, index)=>(
      <div key={joke.id}>
        <h2>{joke.title}</h2>
        <p>{joke.content}</p>
      </div>
    ))}
    </>
  );
}

export default App;
