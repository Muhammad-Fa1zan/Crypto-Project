import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { CoinType } from '@/fetchdata/Coinapi';

interface CoinsProps {
  coins: CoinType[];
}

const CoinsList = ({ coins }: CoinsProps) => {
  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Coin</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h Change</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {coins.map((coin , index) => (
            <TableRow key={coin.id}>
              <TableCell>{index + 1} )</TableCell>
              <TableCell className="flex items-center gap-2 text-[1rem]">
                <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </TableCell>
              <TableCell className="text-[1rem]">{coin.market_cap_rank}</TableCell>
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
    </div>
  );
};

export default CoinsList;

