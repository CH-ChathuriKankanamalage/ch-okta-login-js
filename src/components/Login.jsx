import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { OktaAuth, IdxStatus } from '@okta/okta-auth-js';
import {oktaConfig} from "../config/oktaConfig";

const oktaAuth = new OktaAuth(oktaConfig);
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const { oktaAuth, authState } = useOktaAuth();
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         if (authState?.isAuthenticated) {
//             navigate('/');
//         }
//     }, [authState, navigate]);
//
//     const login = async () => {
//         await oktaAuth.signInWithRedirect();
//     };
//
//     return (
//         <div>
//             <h1>Please Login</h1>
//             <button onClick={login}>Login with Okta</button>
//         </div>
//     );
// };
//
// export default Login;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const transaction = await oktaAuth.idx.authenticate({ username, password });

            if (transaction.status === IdxStatus.SUCCESS) {
                // Authentication successful, handle tokens and redirect
                console.log('Tokens:', transaction.tokens);
            } else if (transaction.status === IdxStatus.PENDING) {
                // Handle MFA or other challenges
                console.log('Next step:', transaction.nextStep);
            } else {
                setError('Authentication failed');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;