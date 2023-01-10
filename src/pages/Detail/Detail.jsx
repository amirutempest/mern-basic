import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';

const Detail = () => {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => console.log(err))
    }, [id])
    return (
        <div>
            <h1>Detail Page</h1>
            <h2>Params id : {id}</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>

            <nav>
                <Link to={'post'}>Post</Link> | <Link to={'produk'}>Produk</Link>
            </nav>

            <Outlet/>
        </div>
    )
}

export default Detail