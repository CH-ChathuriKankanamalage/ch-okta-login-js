import { useOktaAuth } from '@okta/okta-react';
import { Navigate } from 'react-router-dom';

const SecureRoute = ({ children }) => {
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        return <div>Loading...</div>;
    }

    if (!authState.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default SecureRoute;