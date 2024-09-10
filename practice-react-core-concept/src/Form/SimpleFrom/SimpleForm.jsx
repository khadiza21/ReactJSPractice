const SimpleForm = () => {

    const handleSubmit= (e) => {
        e.preventDefault();

        console.log('from Submit ',e.target.name.value)
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;