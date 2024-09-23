import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#494b9c98] bg-[#4244c298] text-[#cdffff] hover:bg-[#cdffff] hover:text-[#2d2e66]"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 border-[#9ea0bbcb] text-[#a4a6bb] bg-teal-950 hover:bg-teal-400 hover:text-[#fff]"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
 
export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    // hover:bg-gray-100 (for btns)
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 border-[#9ea0bbcb] text-[#a4a6bb] bg-red-950 hover:bg-red-400 hover:text-[#fff]">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
