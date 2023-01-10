import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp)=> resp.json())
        .then((data) => {
            setUsers(data);
        })
        .catch((err)=> console.log(err))
    }, [])

    const handleGoToDetail = (id) => {
        navigate(`/${id}`)
    }
    return (
        <div>
            <p>Halaman Home</p>

            <ul>
                {users.map((user) => {
                    return(
                        <li key={user.id}>
                            {user.name} | {' '}
                        <button onClick={()=> handleGoToDetail(user.id)}>Go To Detail</button>
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default Home;