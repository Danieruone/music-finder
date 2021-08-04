import { useState } from "react";
// hooks
import { useSearchSong } from "./hooks/useSearchSong";
// components
import { SearchBar } from "./components/SearchBar";
import { ListOfSongCard } from "./components/ListOfSongCard";

function App() {
  const [input, setInput] = useState("");
  const { searchSong, isLoading, tracks } = useSearchSong();

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setInput("");
    await searchSong(input);
  };

  return (
    <div className="App">
      <h1>Buscador de canciones</h1>
      {isLoading && <p>cargando...</p>}
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      <ListOfSongCard tracks={tracks} />
    </div>
  );
}

export default App;
