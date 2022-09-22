import React from 'react';
import GoogleLogin from 'react-google-login';

export function Login() {
    const handleFailure = (googleData)=>{
            alert(googleData);
    }
    const handleLogin = (googleData)=>{
        console.log(googleData);
    }
    return(
    <div>
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
        >

        </GoogleLogin>
    </div>
    )
}