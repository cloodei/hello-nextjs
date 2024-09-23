import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import styles from '@/app/ui/nightStar.module.css';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main className={`p-6 md:p-12 ` + styles.nightBG} style={{ minHeight: '100vh' }}>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}