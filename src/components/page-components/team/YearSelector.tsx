import { Select, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';

const YearSelector = ({
  selectedYear,
  setSelectedYear,
}: {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}) => {
  return (
    <Select
      value={selectedYear.toString()}
      onValueChange={(value) => setSelectedYear(parseInt(value))}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an year" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem value="2025">2025</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default YearSelector;
