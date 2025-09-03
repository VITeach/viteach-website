import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const AnotherPage = async () => {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // if (!session) {
  //   return redirect('/login');
  // }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Another Page</h1>
    </div>
  );
};

export default AnotherPage;
