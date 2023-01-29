import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedLogin = () => {
    const token = localStorage.getItem("token");

    if(!token) {
        return <Navigate to="/" replace />;
    }
    return ;
}

export default ProtectedLogin