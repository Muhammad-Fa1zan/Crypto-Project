
import { fetchCoins } from "@/fetchdata/Coinapi";
import CoinsList from "@/pages/CoinsList";
import { useQuery } from "@tanstack/react-query";
import type { CoinType } from "@/fetchdata/Coinapi";
import { useState } from "react";
import { AlertCircle, Loader2,} from "lucide-react";





const QueryGet = () => {

  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError,} = useQuery<CoinType[]>({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    staleTime : 60 * 1000,
    refetchInterval: 5000,
  });

  console.log(data);

  if (isLoading) return <div className="text-center text-2xl font-bold flex justify-center items-center h-screen">{<Loader2 className="w-15 h-15 animate-spin" />}</div>;
  if (isError) return <div className="text-center text-2xl font-bold flex justify-center items-center h-screen"><AlertCircle className="w-10 h-10" /> Error: Something went wrong</div>;

  return (
    <CoinsList  setPage={setPage} coins={data || []} />
  )
};

export default QueryGet;


