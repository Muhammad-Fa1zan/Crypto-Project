import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { CoinType } from '@/fetchdata/Coinapi';
import CoinsInput from './CoinsInput';
import { useState } from 'react';
import { SkeletonCard } from '@/features/SkeletonLoader';
import PaginationButtons from './PaginationButtons';

interface CoinsProps {
  coins: CoinType[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const CoinsList = ({ coins, setPage }: CoinsProps) => {

  const [search, setSearch] = useState<string>("");
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
   


  return (
    <div className="p-4">
      <CoinsInput setSearch={setSearch} />
      {filteredCoins.length === 0 ? (
             <div className='flex justify-center items-center h-screen'><SkeletonCard /></div>
       ) : 
       (
        <Table>
        <TableHeader className='text-[1.2rem] mt-10'>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Coin</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCoins.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell className="text-[1rem]">{coin.market_cap_rank}</TableCell>
              <TableCell className="flex items-center gap-2 text-[1rem]">
                <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </TableCell>
              <TableCell className="text-[1rem]">${coin.current_price.toLocaleString()}</TableCell>
              <TableCell className="text-[1rem]">${coin.market_cap.toLocaleString()}</TableCell>
              <TableCell
                className={
                  coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       )}
       <PaginationButtons  setPage={setPage} />
    </div>
  );
};

export default CoinsList;

