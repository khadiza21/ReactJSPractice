import { useEffect, useState } from "react";
import User from "./User";

export default function UsersUseEffect() {
    const userContainer = {

        display: 'grid',
        gridTemplateColumns: ' 1fr 1fr 1fr',
        gridGap: ' 20px',

    }
  

    const [users, setUsers] = useState([]);
    const [visitedusers, setVisitedUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.org/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const handleUser = user => {
        const newVisitUser = [...visitedusers, user];
        setVisitedUsers(newVisitUser)
        console.log('added user');
        console.log(user)
    }

    return (
        <>
            <div>
                <h3>Users : {users.length}</h3>
                <div>
                    <h5>Visited countries: {visitedusers.length}</h5>
                  {  visitedusers.map( visitUser =>  <li
                  key={visitUser?.login?.uuid}
                  >{visitUser?.firstname}</li>
                    )}
                    {console.log(visitedusers)}
                </div>
                <div style={userContainer}>
                    {
                        users.map(user =>

                            <User 
                                key={user.id}
                                user={user}
                                handleUser={handleUser}
                            ></User>

                        )
                    }
                </div>

            </div>
        </>
    )

}