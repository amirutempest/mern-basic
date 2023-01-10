import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const FakeAuth = true; //jika false maka dinyatakan belum login dan ditolak untuk menampilkan detail
                            //jika true maka dinyatakan sudah login dan dapat akses ke detail

    if (!FakeAuth) return <Navigate to={'/login'}/>

    return props.children;
}

export default ProtectedRoute;