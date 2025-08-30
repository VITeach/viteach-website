import { notFound } from 'next/navigation';

const subjects = ['science', 'maths', 'english'];

interface PageProps {
  params: {
    grade: string;
    subject: string;
  };
}

const DigitalLibraryContent = ({ params }: PageProps) => {
  // If you are seeing this, then the issue probably got fixed and I never cared about removing this comment
  // Just so you know, I was debugging this in production (because who the fk needs tests)
  // Also, nextjs is so shitty that it doesn't let me name a dynamic route to be class because it might break something
  const { grade, subject } = params;
  const classNumber = parseInt(grade, 10);

  if (isNaN(classNumber) || classNumber < 1 || classNumber > 12) {
    return notFound();
  }

  if (!subjects.includes(subject)) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <h1>Digital Library Content</h1>
      <div className="flex flex-col items-center justify-center gap-y-4 text-2xl font-bold text-red-900">
        <h2>Subject: {subject}</h2>
        <h2>Class: {classNumber}</h2>
      </div>
    </div>
  );
};

export default DigitalLibraryContent;
