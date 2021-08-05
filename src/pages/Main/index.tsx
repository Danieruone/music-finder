import { useState } from "react";
// hooks
import { useSearchSong } from "../../hooks/useSearchSong";
// components
import { SearchBar } from "../../components/SearchBar";
import { ListOfSongCard } from "../../components/ListOfSongCard";
// styles
import { Container, Title } from "./styles";
// assets
import itunesicon from "../../assets/icons/itunes.svg";

export const Main = () => {
  const [input, setInput] = useState("");
  const {
    searchSong,
    isLoading,
    tracks,
    setTracks,
    paginationData,
    changePage,
  } = useSearchSong();

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setTracks([]);
    if (input !== "") {
      await searchSong(input);
    }
  };

  return (
    <Container>
      <Title>
        <img src={itunesicon} alt="Itunes icon" />
        <h1>Music Finder</h1>
      </Title>
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      <ListOfSongCard
        tracks={tracks}
        isLoading={isLoading}
        paginationData={paginationData}
        changePage={changePage}
      />
    </Container>
  );
};
