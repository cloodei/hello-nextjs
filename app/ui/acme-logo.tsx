import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`flex justify-center items-center w-full leading-none text-white`}
    >
      <GlobeAltIcon className="h-16 w-16 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
