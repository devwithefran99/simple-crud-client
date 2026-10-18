'use client'
import React from 'react';
import Link from 'next/link';
import {

  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import UpdateUserData from './UpdateUserData';


const UserCard = ({user}) => {
  const {_id} = user
  const router = useRouter();
  
const handleDeleteUser = async (id) => {
  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  });

  const afterDelete = await res.json();

  if (afterDelete.deletedCount > 0) {
    router.refresh();
  }
};

    return (
      
            <Card className="relative mx-auto w-full max-w-sm pt-0">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>
       email:  {user.email}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <Link href={`/users/${user._id}`}> <Button className="btn w-full"> view details</Button> </Link>

        <div className='flex justify-between' >
         <UpdateUserData user={user} />
        <Button onClick={() => handleDeleteUser(_id)}
        variant="destructive" className="btn border rounded">Delete</Button>
        </div>
      </CardFooter>
    </Card>
             
    );
};

export default UserCard;