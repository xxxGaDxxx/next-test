import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';

export default async function SignIn() {
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <GoogleButton />
      or
      <SignInForm />
    </div>
  );
}
