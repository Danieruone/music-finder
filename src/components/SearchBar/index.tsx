import { FC, useRef } from "react";
// styles
import { Container } from "./styles";

interface Props {
  handleSubmit: (e: any) => void;
  handleChange: (e: any) => void;
}

export const SearchBar: FC<Props> = ({ handleSubmit, handleChange }) => {
  const inputField = useRef() as React.MutableRefObject<HTMLInputElement>;
  const submit = (e: any) => {
    handleSubmit(e);
    inputField.current.value = "";
  };
  return (
    <Container onSubmit={submit}>
      <input
        type="text"
        placeholder="Nombre de la canción..."
        ref={inputField}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </Container>
  );
};
