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
    <div className="mt-16 overflow-x-auto bg-gray-300 rounded-2xl p-2">
      <Table>
        <TableCaption>
          Average Temperature (°C) and Sunny Days by Month
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Climate In India</TableHead>
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
