import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle,setIsLoading}=useAuth();
    const history= useHistory()
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handlegoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="text-center container h-100 mb-5 mt-5">
            <h1 className="mt-5 mb-5">Google Log in</h1>

            <button onClick={handlegoogleSignIn} className="btn btn-primary mt-5 mb-5">Google SignIn</button>

           
        </div>
       
    );
};

export default Login;