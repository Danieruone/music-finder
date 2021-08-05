import React, { FC } from "react";
import { FaTimes } from "react-icons/fa";
// styles
import { Container, Card, CardDetail } from "./styles";

interface Props {
  track: any;
  setShowModal: any;
}

export const SongDetail: FC<Props> = ({ track, setShowModal }) => {
  return (
    <Container>
      <Card>
        <div onClick={() => setShowModal(false)}>
          <FaTimes
            style={{ fontSize: 20, marginBottom: 20, cursor: "pointer" }}
          />
        </div>
        <div>
          <img src={track.album.images[1].url} alt="Album" />
        </div>
        <CardDetail>
          <h1>{track.name}</h1>
          <div>
            <div>
              <h1>Album: </h1>
              <span>{track.album.name}</span>
            </div>
            <div>
              <h1>Fecha de lanzamiento: </h1>
              <span>{track.album.release_date}</span>
            </div>
          </div>
        </CardDetail>
      </Card>
    </Container>
  );
};
