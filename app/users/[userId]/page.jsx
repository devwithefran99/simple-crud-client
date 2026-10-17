import React from 'react';

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(`http://localhost:5000/users/${userId}`);

  if (!res.ok) {
    return <div>User not found or failed to load.</div>;
  }

  const user = await res.json();

  return (
    <div>
      <h2>User Details: {userId}</h2>
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailPage;