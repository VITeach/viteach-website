'use client';
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { useYearStore } from '@/stores/yearStore';

const YearSelector = () => {
  const year = useYearStore((s) => s.year);
  const setYear = useYearStore((s) => s.setYear);

  /*
   * If you saw a slight issue with the dropdown shifting the whole UI,
   * Then probably you are using chrome, and you are a retarded
   * Use a different browser......I am just kidding, just find a fix for it.
   * Plis
   */

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
