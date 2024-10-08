import Image from 'next/image';
import Search from '@/app/ui/search';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function CustomersTable({ query }: { query: string }) {
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full p-6 md:p-12">
      <h1 className={`mb-8 text-xl md:text-2xl text-[#d6e0e0]`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 md:mt-10 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md border bg-[#171624] border-[#6a648f] p-4 pt-1 md:pt-0 text-[#d6e0e0]">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={customer.image_url}
                              className="object-cover rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={32}
                              height={32}
                            />
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md md:table">
                <thead className="rounded-md text-left text-sm font-normal border-b border-b-gray-200">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="object-cover rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={44}
                            height={44}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
