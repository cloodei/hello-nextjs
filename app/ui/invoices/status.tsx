import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full pe-[9px] ps-[13px] py-1 text-xs',
        {
          'bg-[#a0a0a08c] text-[#d3d3d3]': status === 'pending',
          'bg-[#1f532e] text-[#dfdcdc]': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-[#d3d3d3]" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-[#dfdcdc]" />
        </>
      ) : null}
    </span>
  );
}
