import React from 'react';
import UserCard from '../../components/UserCard';
import Link from "next/link";

const UserPage = async () => {
    const res = await fetch("http://localhost:5000/users")
    const users = await res.json()
    return (
        
<div className="max-w-6xl mx-auto p-6">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold">
      Total Users: {users.length}
    </h2>

    <Link
      href="/users/new"
      className="btn btn-primary border p-3 rounded"
    >
      + Add New User
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {users.map((user) => (
      <UserCard key={user._id} user={user} />
    ))}
  </div>
</div>

    );
};

export default UserPage;