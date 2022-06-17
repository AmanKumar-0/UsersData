import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Users() {
        const [userId, setUserId]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("https://jsonplaceholder.typicode.com/users");
            const resultJson = await result.json();
            setUserId(resultJson);
          };
          fetchData();
    }, [])
    
  return (
    <div className='username'>
        <div className="username_names">
            {userId.map((userId) => (
                <Link 
                to={`/${userId.id}/user`}
                 key={userId.id}
                >
                <h5>{userId.name}</h5>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Users