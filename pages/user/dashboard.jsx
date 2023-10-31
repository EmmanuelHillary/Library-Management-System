import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from Redux
import UserLayout from '@/components/layout/userLayout';
import Intro from '@/components/user/Intro';
import Fields from '@/components/user/fields';

const Dashboard = () => {
  // Access the authentication token from Redux store
  const authToken = useSelector((state) => state.auth.token);

  return (
    <UserLayout title="User Dashboard">
      <Intro authToken={authToken} /> {/* Pass authToken to Intro component */}
      <Fields authToken={authToken} /> {/* Pass authToken to Fields component */}
    </UserLayout>
  );
}

export default Dashboard;
