import { useState } from "react";
// services
import { searchByQuery, getAnotherPage } from "../services/RestService";
// interfaces
import { QueryParams } from "../interface/QueryParams";

export const useSearchSong = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [paginationData, setpaginationData] = useState();
  const [resetCurrentPage, setResetCurrentPage] = useState(false);

  const searchSong = async (input: string) => {
    setIsLoading(true);
    setResetCurrentPage(!resetCurrentPage);
    const params: QueryParams = {
      q: input,
      type: "track",
      market: "US",
      limit: 10,
    };
    await searchByQuery(params).then((res: any) => {
      console.log(res);
      setpaginationData(res.data.tracks);
      setTracks(res.data.tracks.items);
    });
    setIsLoading(false);
  };

  const changePage = async (url: string) => {
    setIsLoading(true);
    await getAnotherPage(url).then((res: any) => {
      console.log(res);
      setpaginationData(res.data.tracks);
      setTracks(res.data.tracks.items);
    });
    setIsLoading(false);
  };

  return {
    searchSong,
    isLoading,
    tracks,
    setTracks,
    paginationData,
    changePage,
    resetCurrentPage,
  };
};
