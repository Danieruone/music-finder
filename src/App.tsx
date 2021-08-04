import { useState } from 'react';
import { searchByQuery } from "./services/RestService"
import { QueryParams } from "./interface/QueryParams" 

function App() {
  const [input, setInput] = useState("")
  const [tracks, setTracks] = useState([])

  const handleChange = (e:any) =>{
    setInput(e.target.value)
  }

  const handleSubmit = async (e:any) =>{
    e.preventDefault()
    const params:QueryParams={
      q: input,
      type: "track",
      market: "US", 
      limit: 10,
    } 
    await searchByQuery(params).then((res:any) => {
      setTracks(res.data.tracks.items)
    })
  }

  return (
    <div className="App">
     <h1>Buscador de canciones</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleChange}/>
       <button type="submit">Buscar</button>
     </form>
     {tracks.map((track:any, idx) => {
       return <p key={idx}>{track.name}</p>
     })}
    </div>
  );
}

export default App;
