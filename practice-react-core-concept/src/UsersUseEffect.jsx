import { useEffect, useState } from "react";
import User from "./User";

export default function UsersUseEffect() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.org/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <>
            <div>
                <h3>Users : {users.length}</h3>
                {
                    users.map(user => <User
                    //key={}
                    user = {user}
                    ></User>)
                }
            </div>
        </>
    )

}