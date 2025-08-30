import { notFound } from 'next/navigation';

type DigitalLibraryContentProps = {
  params: {
    class: string;
    subject: string;
  };
};

const subjects = ['science', 'maths', 'english'];

const DigitalLibraryContent = async ({
  params,
}: DigitalLibraryContentProps) => {
  const { class: classParam, subject: subjectParam } = await params; // Don't trust the linter, it is needed

  const classNumber = parseInt(classParam);

  // Validate class number
  if (classNumber < 1 || classNumber > 12) {
    return notFound();
  }

  // Validate subject
  if (!subjectParam || !subjects.includes(subjectParam)) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <h1>Digital Library Content</h1>
      <div className="flex flex-col items-center justify-center gap-y-4 text-2xl font-bold text-red-900">
        <h2>Subject: {subjectParam}</h2>
        <h2>Class: {classNumber}</h2>
      </div>
    </div>
  );
};

export default DigitalLibraryContent;
