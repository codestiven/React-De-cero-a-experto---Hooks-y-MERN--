import React, { useEffect } from 'react'

const SimpleForm = () => {
    const [formState, setformState] = React.useState({
        username: 'lolo',
        email: 'fernando@gmail.com'
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value
        });
    }



    useEffect(() => {
        console.log('useEffect called');
    }, [formState]);

  return (
    <>

        <h1>Simple Form</h1>
        <hr />

          <input type="text" placeholder='Username' name='username' value={username} onChange={handleInputChange} />
          <input type="text" placeholder='Email' name='Email' value={email} onChange={handleInputChange} />

      
    </>
  )
}

export default SimpleForm
