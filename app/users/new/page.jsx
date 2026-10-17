'use client'
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

const NewUserPage = () => {
    const handleAddNewUser = async  (e) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formdata.entries())
        
       const res = await fetch('http://localhost:5000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
});
        console.log('response:' ,res)

        const afterSubmit = await res.json();

        if(afterSubmit.insertedId){
          alert('users added successfully!')
          redirect('/users')
        }
    }
    return (
       
<div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-lg bg-card border rounded-xl shadow-sm p-6 md:p-8">

    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold">
        Add New User
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Fill in the details to create a new user.
      </p>
    </div>

    <form onSubmit={handleAddNewUser}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">
            Full Name
          </FieldLabel>
          <Input
            id="name"
            name="name"
            placeholder="Enter full name"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">
            Email Address
          </FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
          />
          <FieldDescription>
            Enter a valid email address.
          </FieldDescription>
        </Field>

        <Field orientation="horizontal" className="mt-4">
          <Button
            type="reset"
            variant="outline"
            className="flex-1"
          >
            Reset
          </Button>

          <Button
            type="submit"
            className="flex-1"
          >
            Add User
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </div>
</div>

    );
};

export default NewUserPage;