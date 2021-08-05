import { FC } from "react";
import Loader from "react-loader-spinner";
import { SongCard } from "../SongCard";

import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  tracks: any[];
  isLoading: boolean;
}

export const ListOfSongCard: FC<Props> = ({ tracks, isLoading }) => {
  return (
    <Container>
      {isLoading && (
        <div style={{ marginTop: 200 }}>
          <Loader type="Puff" color="#1DB954" height={50} width={50} />
        </div>
      )}
      
      {tracks.map((track: any, idx: number) => {
        return <SongCard key={idx} {...track} />;
      })}
    </Container>
  );
};
