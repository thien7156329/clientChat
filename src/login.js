import React from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { AvatarGenerator } from "random-avatar-generator";
import getRandomFruitsName from "random-fruits-name";

export default class Login extends React.Component {
  responseFacebook = (response) => {
    this.props.setUser(response, 0);
  };

  responseGoogle = (response) => {
    this.props.setUser(response, 1);
    localStorage.setItem("user", JSON.stringify(response));
    localStorage.setItem("loginType", 1);
  };

  handleClickGuestLogin = () => {
    // Simply get a random avatar
    const generator = new AvatarGenerator();
    const username = getRandomFruitsName("en");
    const randomAvatarImageUrl = generator.generateRandomAvatar(username);

    let user = {
      name: username,
      status: "online",
      picture: {
        data: {
          url: randomAvatarImageUrl,
        },
      },
    };

    this.props.setUser(user, 0);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loginType", 0);
  };

  render() {
    return (
      <div className="containFB">
        <FacebookLogin
          // cssClass="facebook"
          textButton="FaceBook"
          // appId="3469006863157349"
          appId={process.env.REACT_APP_FACEBOOK_KEY}
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        <GoogleLogin
          className="google"
          buttonText="Google"
          clientId={process.env.REACT_APP_GOOGLE_KEY}
          onSuccess={this.responseGoogle}
          isSignedIn={false}
        />
        <button className="guest_login" type="button" onClick={this.handleClickGuestLogin}>
          <span>Guest Login</span>
        </button>
      </div>
    );
  }
}
