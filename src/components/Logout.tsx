'use client';
import { signOut } from '@/lib/auth-client';
import { Button } from './ui/button';

const Logout = () => {
  return (
    <Button variant="destructive" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default Logout;
