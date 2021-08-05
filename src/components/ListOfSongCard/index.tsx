import { FC, useState, Fragment } from "react";
// npm
import Loader from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";
// components
import { SongCard } from "../SongCard";
import { Paginator } from "../Paginator";
import { SongDetail } from "../SongDetail";
// styles
import { Container, Message, Content } from "./styles";
import { useEffect } from "react";

interface Props {
  tracks: any[];
  isLoading: boolean;
  paginationData: any;
  changePage: any;
  resetCurrentPage: boolean;
}

export const ListOfSongCard: FC<Props> = ({
  tracks,
  isLoading,
  paginationData,
  changePage,
  resetCurrentPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [detailTrack, setDetailTrack] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [resetCurrentPage]);

  return (
    <Fragment>
      {showModal && <SongDetail track={detailTrack} setShowModal={setShowModal}/>}
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
              return (
                <SongCard
                  key={idx}
                  track={track}
                  setDetailTrack={setDetailTrack}
                  setShowModal={setShowModal}
                />
              );
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
    </Fragment>
  );
};
