import { facultyCoordinatorMetaData } from '@/constants/team-meta-data';
import { ProfileCard } from '@/components/ui/profile-card';

const FacultyCoordinatorsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
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
