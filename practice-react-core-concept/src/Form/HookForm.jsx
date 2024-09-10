import useInputState from "../hooks/useInputState";

const HookForm = () => {

   //  const [name,handleNameChange ] = useInputState('Bk')

    const emailState = useInputState('bk013@gmail.com')

    const handleSubmit = e => {
        e.preventDefault();
       // console.log('Hook Form Data ', name)
        console.log('Hook Form Data ', emailState.value)
    }

    return (
        <div>
             <h1>Use Custom  Hook in Form</h1>
              <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"  /> */}
                <br />
                <input {...emailState}   type="email" name="email"  />
                <br />
                <input  type="password" name="password"  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;