import SignUp from '@/components/page-components/auth/sign-up';
import { Toaster } from '@/components/ui/sonner';

const Join = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-sm:pt-20">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-red-900">Join VITeach</h1>
          <p className="mt-2 text-sm text-gray-600">
            Create your account to get started
          </p>
        </div>

        <SignUp />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Join;
