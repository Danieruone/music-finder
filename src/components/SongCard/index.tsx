import { FC } from "react";
// styles
import { Container } from "./styles";

interface Props {
  name: string;
  album: any;
  artists: any;
}

export const SongCard: FC<Props> = ({ name, album, artists }) => {
  return (
    <Container>
      <img src={album.images[1].url} alt="Song's album" />
      <div>
        <h2>{name}</h2>
        <span>By {artists[0].name}</span>
      </div>
    </Container>
  );
};
