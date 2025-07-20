
import { fetchCoins } from "@/fetchdata/Coinapi";
import { useQuery } from "@tanstack/react-query";



const Query = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;


  return (
    <div>
      <h1>Coins List</h1>
  );




