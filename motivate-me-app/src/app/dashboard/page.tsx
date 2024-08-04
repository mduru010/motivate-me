'use client';

import React, { useEffect } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import DashboardComp from '../components/dashboard';
import DashboardTwo from '../components/dashboardToo';

const Dashboard = () => {

  return (
    <>
    {/* <DashboardComp></DashboardComp> */}
    <DashboardTwo/>
    </>
  );
};

export default Dashboard;