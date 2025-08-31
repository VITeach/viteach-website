import {
  ObsGrid,
  YearSelector,
  FacultyCoordinatorsGrid,
} from '@/components/page-components/team';

// This is the perfect scenario where I should use a state managment tool
// Because the only way these two components can use the same state if the have a common parent
// Which is not optimal, as it'll increase the number of re-renders
// I'll add zustand to this, anyway it'll be helpful in future for sure

// UPDATE: I added zustand, you can go to the previous commit to get to understand more about the problem

const BoardMembers = () => {
  return (
    <div className="max-md:mt-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-900">
            The Team
          </h2>
          <div className="text-gray-800 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            VITeach is driven by a dedicated team of students and faculty who
            work together with a shared purpose—to make quality education
            accessible to underprivileged children. The team brings together
            diverse skills in teaching, content creation, outreach, design,
            technology, and operations, ensuring every initiative is executed
            with professionalism and impact. Their commitment goes beyond
            academics; they invest time, energy, and creativity to mentor,
            inspire, and empower young learners. United by compassion and
            responsibility, the VITeach team embodies the spirit of
            collaboration, hard work, and service, turning a simple idea into a
            sustainable movement for social good.
          </div>
        </div>

        {/* Faculty Coordinators Section */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-900">
              Faculty Co-ordinators
            </h3>
            <div className="text-gray-800 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
              Faculty Coordinators at VITeach are esteemed college professors
              who guide the club with their experience and ensure smooth
              functioning by handling formal processes and paperwork. They act
              as mentors, supporting students in aligning initiatives with
              institutional standards while enabling the team to focus on
              impactful work.
            </div>
          </div>
          <div className="pt-4 max-w-2xl mx-auto">
            <FacultyCoordinatorsGrid />
          </div>
        </div>

        {/* Board Members Section */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-900">
              Board Members
            </h3>
            <div className="text-gray-800 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
              The Board Members oversee the overall management of the club,
              providing direction, structure, and accountability. They help in
              decision-making, coordination across teams, and ensure that every
              activity reflects the vision and mission of VITeach. Together, the
              Faculty Coordinators and Board Members form the backbone of the
              organization&apos;s operations.
            </div>
          </div>
          <div className="pt-4 space-y-8">
            <div className="flex justify-center">
              <YearSelector />
            </div>
            <ObsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
