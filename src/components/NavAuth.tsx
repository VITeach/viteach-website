'use client';

import { useSession } from '@/lib/auth-client';
import CustomButton from './CustomButton';
import Logout from './Logout';

interface NavAuthProps {
  styles?: string;
}

const NavAuth = ({ styles }: NavAuthProps) => {
  const authenticated = useSession().data;
  return (
    <div className="flex items-center gap-x-5">
      {authenticated ? (
        <div className={styles || 'flex items-center gap-x-4'}>
          <CustomButton
            text="Profile"
            variant="outline"
            onClickRoute="/profile"
          />
          <Logout />
        </div>
      ) : (
        <div className={styles || 'flex items-center gap-x-4'}>
          <CustomButton text="Login" variant="outline" onClickRoute="/login" />
          <CustomButton text="Join" variant="default" onClickRoute="/join" />
        </div>
      )}
    </div>
  );
};

export default NavAuth;
