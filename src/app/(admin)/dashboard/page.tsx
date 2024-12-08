import DashComp from '@/app/Components/DashComp';
import { authOptions } from '@/app/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation'; // Import redirect

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to the home page or login page
    redirect('/'); // Redirect to the home page or another page (e.g., '/login')
  }

  return (
    <div>
      <DashComp />
    </div>
  );
}
