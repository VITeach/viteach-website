import SignIn from '@/components/page-components/auth/sign-in';
import { Toaster } from '@/components/ui/sonner';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-red-900">
            VITeach Portal
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your personalized dashboard
          </p>
        </div>

        <SignIn />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a
              href="/join"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Join us
            </a>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
