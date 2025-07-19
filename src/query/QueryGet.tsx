
import { fetchCoins } from "@/fetchdata/Coinapi";
import CoinsList from "@/pages/CoinsList";
import { useQuery } from "@tanstack/react-query";
import type { CoinType } from "@/fetchdata/Coinapi";


const QueryGet = () => {

  const { data, isLoading, isError, error } = useQuery<CoinType[]>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    refetchInterval : 5000,
  });

  console.log(data);

  if (isLoading) return <div className="text-center text-2xl font-bold flex justify-center items-center h-screen">Loading...</div>;
  if (isError) return <div className="text-center text-2xl font-bold flex justify-center items-center h-screen">Error: {error.message}</div>;

  return (
    <CoinsList coins={data || []} />
  )
};

export default QueryGet;



