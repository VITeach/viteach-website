import { facultyCoordinatorMetaData } from '@/constants/team-meta-data';
import { ProfileCard } from '@/components/ui/profile-card';

const FacultyCoordinatorsGrid = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center max-sm:gap-4">
      {facultyCoordinatorMetaData.map((faculty) => (
        <ProfileCard
          key={faculty.key}
          name={faculty.name}
          linkedinUrl={faculty.linkedIn}
          imageUrl={faculty.image}
        />
      ))}
    </div>
  );
};

export default FacultyCoordinatorsGrid;
