export default function User({user,handleUser}){

    const userDiv = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const {firstname,email} = user;
 
return(
    <div style={userDiv}>
        <h4>Name: {firstname } </h4>
        <p>Email: {email} </p>
        <button onClick={() => handleUser(user)}>Mark User</button>
    </div>
)
}