import { ObsGrid } from '@/components/page-components/team';
import YearSelector from '@/components/page-components/team/YearSelector';
import { useState } from 'react';

// This is the perfect scenario where I should use a state managment tool
// Because the only way these two components can use the same state if the have a common parent
// Which is not optimal, as it'll increase the number of re-renders
// I'll add zustand to this, anyway it'll be helpful in future for sure

const BoardMembers = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <div>
      <YearSelector
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <ObsGrid year={selectedYear} />
    </div>
  );
};

export default BoardMembers;
