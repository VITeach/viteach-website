import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect('/login');
  }

  const { user } = session;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ul>
        <li>Email: {user.email}</li>
        <li>Name: {user.name}</li>
        <li>ID: {user.id}</li>
      </ul>
    </div>
  );
}
