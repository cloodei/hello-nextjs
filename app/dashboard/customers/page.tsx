import CustomersTable from "@/app/ui/customers/table";
import styles from '@/app/ui/nightStar.module.css';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
    <main className={styles.nightBG} style={{ minHeight: '100vh' }}>
        <CustomersTable query={query} />
    </main>
    )
}