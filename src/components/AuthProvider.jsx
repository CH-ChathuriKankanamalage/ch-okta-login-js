import React from 'react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import { useNavigate } from 'react-router-dom';
import { oktaConfig } from '../config/oktaConfig';

const oktaAuth = new OktaAuth(oktaConfig);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    return (
        <Security
            oktaAuth={oktaAuth}
            restoreOriginalUri={restoreOriginalUri}
        >
            {children}
        </Security>
    );
};

export default AuthProvider;