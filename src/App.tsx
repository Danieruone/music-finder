import { useState } from 'react';
import { searchByQuery } from "./services/RestService"
import { QueryParams } from "./interface/QueryParams" 
import { ListOfSongCard } from "./components/ListOfSongCard"

function App() {
  const [input, setInput] = useState("")
  const [tracks, setTracks] = useState([])

  const handleChange = (e:any) =>{
    setInput(e.target.value)
  }

  const handleSubmit = async (e:any) =>{
    e.preventDefault()
    setInput("")
    const params:QueryParams={
      q: input,
      type: "track",
      market: "US", 
      limit: 10,
    } 
    await searchByQuery(params).then((res:any) => {
      console.log(res)
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
     <ListOfSongCard tracks={tracks}/>
    </div>
  );
}

export default App;
