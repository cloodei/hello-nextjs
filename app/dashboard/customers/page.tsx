import CustomersTable from "@/app/ui/customers/table";
import { Button } from '@/app/ui/button';
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
        <CustomersTable query={query} />
    )
}