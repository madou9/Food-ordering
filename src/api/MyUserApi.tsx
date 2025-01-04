import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
    email: string;
    auth0Id: string;
    };

// Create a new user in the backend
export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();


    const createMyUserRequest = async (user: createUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                Authorization : `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error('Failed to create user');
        };
    };

    const {mutateAsync: createUser, isLoading, isError, isSuccess} = useMutation(createMyUserRequest); //
    return { createUser, isLoading, isError, isSuccess }; // Return the mutation function
}

type updateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};
// Update the current user in the backend
export const useUpdateMyUser = () => {
    const { getAccessTokenSilently} = useAuth0();
    const updateMyUserRequest = async (formData: updateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        };
        return response.json();
    };
    // Return the mutation function
    const {mutateAsync: updateUser, isLoading, isError, isSuccess, error, reset} = useMutation(updateMyUserRequest);
    // if (isSuccess) {
    //     toast.success('User updated successfully');
    // }
    return { updateUser, isLoading}; // Return the mutation function
};