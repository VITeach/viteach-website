'use client';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Spinner } from '@/components/Spinner';

const Profile = () => {
  const { data, isPending, error, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data?.user && !isPending) {
      router.push('/login');
    }
  }, [data?.user, isPending, router]);

  // Show loading state while checking authentication
  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  // Redirect if no user data
  if (!data?.user) {
    return null;
  }

  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <ul>
          <li>Email: {data?.user?.email}</li>
          <li>Name: {data?.user?.name}</li>
          <li>Image: {data?.user?.image}</li>
          <li>ID: {data?.user?.id}</li>
          <li>Created At: {data?.user?.createdAt?.toISOString()}</li>
          <li>Updated At: {data?.user?.updatedAt?.toISOString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
