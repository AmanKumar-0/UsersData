// import React from 'react'
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";


function UsersPost() {
    const [userPostItems, setUserPostItems] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const resultJson = await result.json();
            setUserPostItems(resultJson);
          };
          fetchData();
    }, [userId])
    

  return (
    <div className="userspost">
        
        
        <Link 
        to="/">
          Back to All Users
        </Link>
        
        <div className="d">Current User: {userId}</div>

        {userPostItems.map((userPostItems)=>(
            <h5><div>Title no. ={userPostItems.id}</div>
                
                <div >Title=
                {userPostItems.title}
                </div>
                <div >
                Body=
                {userPostItems.body}
                </div>
             </h5>
        ))}  
  </div>
  )
}

export default UsersPost