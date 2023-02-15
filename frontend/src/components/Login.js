import React, { useState, useEffect } from 'react';

function Login ( { setCurrentUser, login } ) {
    // initial login form data
    const initialLoginData = {
        email: "",
        password: ""
    };

    // state for login input
    const [loginData, setLoginData] = useState(initialLoginData);

    // handle login input change
    const handleLoginChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(loginData)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input
                    type="text"
                    name="email"
                    onChange={handleLoginChange}/>
                </label>
                <label>Password
                    <input
                    type="text"
                    name="password"
                    onChange={handleLoginChange}/>
                </label>
                <input
                type="submit"
                value="Login" />
            </form>
        </div>
    )
}

export default Login;