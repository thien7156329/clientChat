import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        //Khởi tạo state,
    }

    responseFacebook(response) {
        console.log(this.props)
        // this.props.setVlogin(response)
        console.log(response)
    }

    render () {
        return (
           <div>
                <FacebookLogin
                    appId="904848930011624"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends,user_actions.books"
                    callback={this.responseFacebook}
                />
           </div>
        )
    }
}