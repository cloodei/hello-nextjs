'use client';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { PopoverButton } from './button';
import styles from '@/app/ui/home.module.css';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8" style={{ background: 'linear-gradient(to bottom, #241c4e 0%, #45224d 100%)' }}>
        <h1 className={`mb-3 text-2xl text-sky-200`}>
          Logging in...
        </h1>
        <div className="w-full mb-1">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-sky-200"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block rounded-md border border-gray-500 w-full py-[10px] pl-10 text-sm placeholder:text-sky-100"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                style={{ backgroundColor: '#161131 !important', color: 'rgb(248, 250, 252) !important' }}
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-50 peer-focus:text-gray-100" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-sky-200"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block rounded-md border border-gray-500 w-full py-[10px] pl-10 text-sm placeholder:text-sky-100"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                style={{ backgroundColor: '#161131 !important', color: 'rgb(248, 250, 252) !important' }}
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-50 peer-focus:text-gray-100" />
            </div>
          </div>
        </div>
        <PopoverButton />
        <Button className={`mt-4 w-full my-3 border border-solid border-[#5c7985] text-gray-50 ` + styles.loginBtn} aria-disabled={isPending}>
          <i className="fa-regular fa-user me-[10px]"></i>
          Log in
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
