import LoginForm from '@/app/ui/login-form';
import styles from '@/app/ui/home.module.css';
 
export default function LoginPage() {
  return (
    <main className={`flex items-center justify-center md:h-screen ` + (styles.sideNavRepeating)}>
      <div className="relative mx-auto flex w-full max-w-[360px] flex-col space-y-2.5 p-4 md:-mt-32 md:max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
}