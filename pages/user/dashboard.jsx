import React from 'react'
import UserLayout from '@/components/layout/userLayout';
import Intro from '@/components/user/Intro';
import Fields from '@/components/user/fields';

const Dashboard = () => {
  return (
      <UserLayout title="User Dashboard">
      <Intro />
      <Fields />
    </UserLayout>
  )
}

export default Dashboard
