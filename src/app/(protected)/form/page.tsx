import React from 'react';
import { DraftForm } from '@/components/JoinForm';
import { requireSession } from '@/lib/session';

const FormPage = async () => {
  const user = await requireSession();
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <DraftForm user={user} />
    </div>
  );
};

export default FormPage;
