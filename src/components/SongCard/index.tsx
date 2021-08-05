import { FC } from "react";
// styles
import { Container } from "./styles";

interface Props {
  track: any;
  setDetailTrack: any;
  setShowModal: any;
}

export const SongCard: FC<Props> = ({
  track,
  setDetailTrack,
  setShowModal,
}) => {
  const handleClick = () => {
    setDetailTrack(track);
    setShowModal(true);
  };

  return (
    <Container onClick={handleClick} data-test-id="songcard">
      <img src={track.album.images[1].url} alt="Song's album" />
      <div>
        <h2>{track.name}</h2>
        <span>By {track.artists[0].name}</span>
      </div>
    </Container>
  );
};
