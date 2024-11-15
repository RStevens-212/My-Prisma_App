'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import  AdminDataGrid from './components/AdminDataGrid'

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
      return;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload.isAdmin) {
      router.push('/');
      return;
    }
    setIsAdmin(true);
  }, [router]);

  return isAdmin ? <AdminDataGrid /> : null;
}
