import { requireSession } from '@/lib/session';

export default async function ProfilePage() {
  const user = await requireSession();

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
