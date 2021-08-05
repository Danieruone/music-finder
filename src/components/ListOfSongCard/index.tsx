import { FC } from "react";
// npm
import Loader from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";
// components
import { SongCard } from "../SongCard";
// styles
import { Container, Message } from "./styles";

interface Props {
  tracks: any[];
  isLoading: boolean;
}

export const ListOfSongCard: FC<Props> = ({ tracks, isLoading }) => {
  return (
    <Container>
      {isLoading ? (
        <div style={{ marginTop: 100 }}>
          <Loader type="Puff" color="#1DB954" height={50} width={50} />
        </div>
      ) : tracks.length === 0 ? (
        <Message>
          <FaSearch style={{ fontSize: 50 }} />
          <p>Encuentra tus canciones preferidas</p>
        </Message>
      ) : (
        tracks.map((track: any, idx: number) => {
          return <SongCard key={idx} {...track} />;
        })
      )}
    </Container>
  );
};
