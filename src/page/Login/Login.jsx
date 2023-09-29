
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import app from '../../firebase/firebaseInit';

const Login = () => {
    const [user,setUser]=useState({})
    const auth=getAuth(app)
    const provider=new GithubAuthProvider()

    const handleGitHub=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const logedIN=result.user
            setUser(logedIN)
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div>
                <h2>Login Page</h2>
                <button onClick={handleGitHub} className="bg-indigo-300 rounded-md px-3 py-1" >Login</button>
            </div>

            <div>
                <h2>User Name:{user.displayName}</h2>
            </div>

        </div>
    );
};

export default Login; 