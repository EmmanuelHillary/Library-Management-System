import React from 'react'
import UserLayout from '@/components/layout/userLayout';
import Intro from '@/components/user/Intro';

const Dashboard = () => {
  return (
      <UserLayout title="User Dashboard">
          <Intro />
    </UserLayout>
  )
}

export default Dashboard
