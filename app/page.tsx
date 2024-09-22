import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className={styles.backgroundRepeating}>
        <div className={`mt-4 flex grow flex-col gap-4 md:flex-row p-6`}>
          <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:px-20 flex-1">
            <div
              className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
            />
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Hello world.</strong> Sân chơi của {' '}
              <a href="https://github.com/cloodei/hello-nextjs" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Aan
              </a>
            </p>
            <div className="flex gap-4">
              <Link
                key={'Dashboard'}
                href='/dashboard'
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
              <Link
                key={'Log-in'}
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
