import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Climate } from "@/types";

interface ClimateSectionProps {
  climate: Climate;
  region?: string;
}

export function ClimateSection({ climate, region }: ClimateSectionProps) {
  if (!climate?.months || climate.months.length === 0) {
    return null;
  }

  return (
    <div className="my-32 overflow-x-auto bg-gray-200 rounded-2xl p-2 ">
      <Table className="text-xs">
        <TableCaption className="font-serif text-sm ">
          Average Temperature (°C) and Sunny Days by Month
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="font-serif text-lg font-normal">
              Climate In India
            </TableHead>
            {climate.months.map((monthData) => (
              <TableHead key={monthData.id}>{monthData.Month}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Avg Temperature (°C)</TableCell>
            {climate.months.map((monthData) => (
              <TableCell key={`temp-${monthData.id}`}>
                {monthData.avgTemp}°C
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>Sunny Days</TableCell>
            {climate.months.map((monthData) => (
              <TableCell key={`sunny-${monthData.id}`}>
                {monthData.sunnyDays}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
