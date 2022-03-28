import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const { logged } = useSelector((state) => state.auth);

    console.log(logged);
    return logged ? <Navigate to='/marvel' /> : children
}
