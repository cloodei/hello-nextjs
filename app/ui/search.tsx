'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 250);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full bg-[#2f376346] rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-300"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        style={{ backgroundColor: '#2f376346', color: '#e2e9f0', boxShadow: 'rgba(60, 71, 133, 0.2) 0px 4px 12px, rgba(60, 71, 133, 0.2) 0px 16px 48px, rgba(60, 71, 133, 0.2) 0px 24px 80px' }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-300 peer-focus:text-gray-300" />
    </div>
  );
}
//  bg-[#6a76bb6e] border-[rgb(52,53,107)]