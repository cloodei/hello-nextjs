import CardWrapper from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import styles from '@/app/ui/nightStar.module.css';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
 
export default async function Page() {
  return (
    <main className={styles.nightBG}>
      <h1 className={`mb-4 text-3xl md:text-2xl p-6 md:pb-0 md:px-12 text-[#d6e0e0]`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-6 md:pt-0 md:px-12">
        <Suspense fallback={<CardsSkeleton />} >
          <CardWrapper />
        </Suspense>
      </div>
      <div className="p-6 pt-2 md:p-12 md:pt-3 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />} >
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />} >
          <LatestInvoices></LatestInvoices>
        </Suspense>
      </div>
    </main>
  );
}