'use client';
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { useYearStore } from '@/stores/yearStore';

const YearSelector = () => {
  const year = useYearStore((s) => s.year);
  const setYear = useYearStore((s) => s.setYear);

  return (
    <Select value={String(year)} onValueChange={(val) => setYear(Number(val))}>
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
