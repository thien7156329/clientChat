import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { parseJSON } from 'jquery';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        //Khởi tạo state,
    }

    responseFacebook = (response) => {
        this.props.setUser(response)
        localStorage.setItem('user', JSON.stringify(response))
    }

    render () {
        return (
           <div className='containFB'>
                <FacebookLogin
                    appId="904848930011624"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
           </div>
        )
    }
}