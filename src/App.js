import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import AuthProvider from './components/AuthProvider';
import SecureRoute from './components/SecureRoute';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/callback" element={<LoginCallback />} />
                    <Route
                        path="/"
                        element={
                            <SecureRoute>
                                <Home />
                            </SecureRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
