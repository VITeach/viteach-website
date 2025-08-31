import { ObsGrid } from '@/components/page-components/team';
import YearSelector from '@/components/page-components/team/YearSelector';

// This is the perfect scenario where I should use a state managment tool
// Because the only way these two components can use the same state if the have a common parent
// Which is not optimal, as it'll increase the number of re-renders
// I'll add zustand to this, anyway it'll be helpful in future for sure

// UPDATE: I added zustand, you can go to the previous commit to get to understand more about the problem

const BoardMembers = () => {
  return (
    <div className="mt-30">
      <YearSelector />
      <ObsGrid />
    </div>
  );
};

export default BoardMembers;
