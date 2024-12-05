import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        return <div>Loading...</div>;
    }

    const logout = async () => {
        await oktaAuth.signOut();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-center">
                        Welcome to Your Dashboard
                    </h1>
                </div>

                <div className="space-y-4">
                    <div className="text-center">
                        <p className="text-lg">
                            Hello, {authState.idToken.claims.name}!
                        </p>
                        <p className="text-sm text-gray-600">
                            {authState.idToken.claims.email}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">User Information:</h3>
                        <ul className="space-y-1 text-sm">
                            <li>
                                <span className="font-medium">User ID: </span>
                                {authState.idToken.claims.sub}
                            </li>
                            <li>
                                <span className="font-medium">Groups: </span>
                                {authState.idToken.claims.groups?.join(', ') || 'No groups'}
                            </li>
                        </ul>
                    </div>

                    <button
                        onClick={logout}
                        className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;