import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

export default class Login extends React.Component {

    responseFacebook = (response) => {
        this.props.setUser(response, 0)
        localStorage.setItem('user', JSON.stringify(response))
        localStorage.setItem('loginType', 0)
    }

    responseGoogle = (response) =>{
        this.props.setUser(response, 1)
        localStorage.setItem('user', JSON.stringify(response))
        localStorage.setItem('loginType', 1)
    }

    render () {
        return (
           <div className='containFB'>
                <FacebookLogin
                    // cssClass="facebook"
                    textButton="FaceBook"
                    // appId="3469006863157349"
                    appId="904848930011624"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
                <GoogleLogin
                    className="google"
                    buttonText="Google"
                    clientId="60342117365-mntstprlnp235rau83e4sdul3hjcms9q.apps.googleusercontent.com"
                    onSuccess={this.responseGoogle}
                    isSignedIn={false}
                />
           </div>
        )
    }
}