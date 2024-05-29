import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBans } from "@/hooks/use-bans-data";

export const BansTable = () => {
  const { data: bans } = useBans();

  return (
    <>
      <div>
        <header className="p-8 text-white">
          <h1 className="text-4xl font-bold">Które Goryle mają bana??????</h1>
        </header>
      </div>
      <div>
        <div className="p-8">
          <p className="text-white">
            Liczba zablokowanych kont:{" "}
            <strong>{bans?.filter((ban) => ban.status).length}</strong>
          </p>
        </div>
      </div>
      <div className="p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Nick</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bans?.map((ban) => (
              <TableRow key={ban.nick}>
                <TableCell className="font-medium">{ban.nick}</TableCell>
                <TableCell className="text-red-500">{ban.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={1}>Łącznie kont</TableCell>
              <TableCell className="text-right">{bans?.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};
