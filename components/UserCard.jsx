import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const UserCard = ({user}) => {
    return (
      
            <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>
       email:  {user.email}
        </CardDescription>
      </CardHeader>
    </Card>
            
        
    );
};

export default UserCard;