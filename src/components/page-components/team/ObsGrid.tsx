'use client';
import { obsMetaData } from '@/constants/team-meta-data';
import { ProfileCard } from '@/components/ui/profile-card';
import { useYearStore } from '@/stores/yearStore';

const ObsGrid = () => {
  const year = useYearStore((s) => s.year);

  const departments = obsMetaData[year as keyof typeof obsMetaData];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 px-4">
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
