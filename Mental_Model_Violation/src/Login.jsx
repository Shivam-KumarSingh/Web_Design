import React from "react";

function Login() {

    const handleClick = (event) => {
        event.preventDefault();
        alert("successfully Logged in!");
    }
    return (
        <form>
            <label for="Email">Email</label>
            <input type="email" name="email" placeholder="Email"  required/>

            <label fnor="Password">Password</label>
            <input type="text" name="password" placeholder="Enter Your Password"  required/>

            <button onClick={handleClick} type="submit">Login</button>
        </form>
    );
}

export default Login;
