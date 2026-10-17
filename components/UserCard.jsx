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


const UserCard = ({user}) => {
    return (
      
            <Card className="relative mx-auto w-full max-w-sm pt-0">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>
       email:  {user.email}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`}> <Button className="btn w-full"> view details</Button> </Link>
      </CardFooter>
    </Card>
            
        
    );
};

export default UserCard;