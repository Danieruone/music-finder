import { FC, useState } from "react";
// npm
import Loader from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";
// components
import { SongCard } from "../SongCard";
import { Paginator } from "../Paginator";
// styles
import { Container, Message, Content } from "./styles";

interface Props {
  tracks: any[];
  isLoading: boolean;
  paginationData: any;
  changePage: any;
}

export const ListOfSongCard: FC<Props> = ({
  tracks,
  isLoading,
  paginationData,
  changePage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
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
        <Content>
          {tracks.map((track: any, idx: number) => {
            return <SongCard key={idx} {...track} />;
          })}
          <Paginator
            paginationData={paginationData}
            changePage={changePage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Content>
      )}
    </Container>
  );
};
