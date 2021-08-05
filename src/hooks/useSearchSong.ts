import { useState } from "react";
// services
import { searchByQuery } from "../services/RestService";
// interfaces
import { QueryParams } from "../interface/QueryParams";

export const useSearchSong = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  const searchSong = async (input: string) => {
    setIsLoading(true);
    const params: QueryParams = {
      q: input,
      type: "track",
      market: "US",
      limit: 10,
    };
    await searchByQuery(params).then((res: any) => {
      console.log(res);
      setTracks(res.data.tracks.items);
    });
    setIsLoading(false);
  };

  return { searchSong, isLoading, tracks, setTracks };
};
