import { obsMetaData } from '@/constants/team-meta-data';
import { ProfileCard } from '@/components/ui/profile-card';

const ObsGrid = ({ year }: { year: number }) => {
  const departments = obsMetaData[year as keyof typeof obsMetaData];
  console.log(Object.values(departments));

  return (
    <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
      {Object.values(departments).map((department) =>
        department.map((obs) => (
          <ProfileCard
            key={obs.name}
            name={obs.name}
            title={obs.role}
            description={obs.about}
            imageUrl={obs.image}
            githubUrl={obs.github}
            twitterUrl={obs.X}
            linkedinUrl={obs.linkedIn}
          />
        ))
      )}
    </div>
  );
};

export default ObsGrid;
