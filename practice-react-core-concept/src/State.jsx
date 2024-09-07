import { useState } from "react";

export default function State() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    const [team, setTeam] = useState(11);
    const handleTeamMemberAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleTeamMemberRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <>
            <div style={{ border: '2px solid green' }}>
                <h3>Counter : {count}</h3>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReduce}>Reduce</button>
            </div>

            <div style={teamStyle}>
                <h3>Players: </h3>
                <button onClick={handleTeamMemberAdd}>Add member</button>
                <button onClick={handleTeamMemberRemove}>Remove Member</button>
            </div>

        </>
    )
}