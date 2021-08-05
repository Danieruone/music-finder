import { FC } from "react";
// npm
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// styles
import { Container } from "./styles";

interface Props {
  paginationData: any;
  changePage: any;
  currentPage: any;
  setCurrentPage: any;
}

export const Paginator: FC<Props> = ({
  paginationData,
  changePage,
  currentPage,
  setCurrentPage,
}) => {
  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
    await changePage(paginationData.next);
  };

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      await changePage(paginationData.previous);
    }
  };

  return (
    <Container>
      <div onClick={handlePrevPage}>
        <FaArrowLeft />
      </div>
      <span>
        Página {currentPage} de {paginationData.total / 10}
      </span>
      <div onClick={handleNextPage}>
        <FaArrowRight />
      </div>
    </Container>
  );
};
