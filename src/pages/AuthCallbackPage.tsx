import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const {createUser} = useCreateMyUser();
    const hasCreatedUser = useRef(false); // Create a ref to check if the user has been created

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({email: user.email, auth0Id: user.sub}); // Create user in the backend
            hasCreatedUser.current = true; // Set the ref to true
        }
        navigate('/'); // Redirect to the home page
    }, [createUser, navigate, user]); // Add user to the dependencies
  return (
    <>Loading...</>
  )
}

export default AuthCallbackPage