import LoadingButton from '@/components/LoadingButton';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'; // Import zod

// Define the schema for the form
const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    addressLine1: z.string().min(1, "address Line 1 is required"),
    country: z.string().min(1, "country is required"),
    city: z.string().min(1, "city is required"),
    });
    // Define the type for the form data
    type userFormData = z.infer<typeof formSchema>; // Infer the type from the schema


type Props = {
   onSave: (userProfileData: userFormData) => void; // Define the onSave prop
   isLoading: boolean; // Define the isLoading prop
};

// Define the UserProfileForm component
const UserProfileForm = ({onSave, isLoading}: Props) => {
    const form = useForm<userFormData>({
        resolver: zodResolver(formSchema), // Use the zod resolver
    }); 

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} 
            className='space-y-4 bg-gray-50 rounded-lg md:p-10'
            >
                <div>
                    <h2 className='text-2xl font-bold'> User profile Form</h2>
                    <FormDescription>
                        View and Change your profile information heree
                    </FormDescription>
                </div>
                <FormField control={form.control} name="email" render={({field}) =>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field}  className='bg-white' />
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="name" render={({field}) =>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>

                <div className='flex flex-col md:flex-row gap-4'>
                <FormField control={form.control} name="addressLine1" render={({field}) =>(
                    <FormItem className='flex-1'>
                        <FormLabel>addressLine1</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="city" render={({field}) =>(
                    <FormItem className='flex-1'>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="country" render={({field}) =>(
                    <FormItem className='flex-1'>
                        <FormLabel>Contry</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                </div>
                {isLoading ? <LoadingButton /> : <button type='submit' className='px-3 py-4 rounded-md bg-orange-500'>Submit</button>}
            </form>
        </Form>
    );
}
export default UserProfileForm;