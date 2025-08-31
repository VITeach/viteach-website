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
            githubUrl={'github' in obs ? obs.github : ''}
            twitterUrl={'X' in obs ? obs.X : ''}
            linkedinUrl={'linkedIn' in obs ? obs.linkedIn : ''}
            instagramUrl={'instagram' in obs ? obs.instagram : ''}
          />
        ))
      )}
    </div>
  );
};

export default ObsGrid;
