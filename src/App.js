import React from 'react';
import $ from 'jquery';
import Messages from './message-list';
import Input from './input';
import _map from 'lodash/map';
import io from 'socket.io-client';
import Login from './login';
import ModalSignOut from './modal-sign-out';

import './App.css';

export default class App extends React.Component {
   constructor(props) {
       super(props);
       //Khởi tạo state,
       this.state = {
           messages: [
           ],
           user: null,
           input: '',
           isShowPopup: false,
           checkLogin: false,
           visible: false,
           typeLogin: localStorage.getItem('loginType') || null
       }
       this.socket = null;
   }
   //Connetct với server nodejs, thông qua socket.io
   componentWillMount() {
       this.socket = io('https://suakhet.herokuapp.com/');
       this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
       this.socket.on('newMessage', (response) => {this.newMessage(response)}); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
   }
   //Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình

   componentDidMount(){
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        })
   }

   newMessage(m) {
       const messages = this.state.messages;
       let ids = _map(messages, 'id');
       let max = parseInt(Math.max(...ids)) || 0;
       messages.push({
           id: max+1,
           user: m.user,
           message: m.data,
           url: m.url
       });

       let objMessage = $('.messages');
       if (objMessage[0].scrollHeight - objMessage[0].scrollTop === objMessage[0].clientHeight ) {
           this.setState({messages});
           objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300); //tạo hiệu ứng cuộn khi có tin nhắn mới

       } else {
           this.setState({messages});
           objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);
       }
   }
   //Gửi event socket newMessage với dữ liệu là nội dung tin nhắn
    sendnewMessage = () => {
        const {typeLogin} = this.state
        let data = {}
        if(typeLogin == 0){
            data = {
                user: this.state.user.name || 'None',
                data: this.state.input || '',
                url: this.state.user.picture.data.url || ''
            }
        }else if(typeLogin == 1){
            data = {
                user: (this.state.user.profileObj.name || null) ,
                data: this.state.input || '',
                url: this.state.user.profileObj.imageUrl || ''
            }
        }
        if (this.state.input) {
            this.socket.emit("newMessage", data); //gửi event về server
            this.setState({
                input: ''
            })
        }
    }

    changeMessage = (value) =>{
        document.getElementById("myInput").focus() 
        this.setState({
            input: value
        })
    }

    isPopup = (val) =>{
        this.setState({
            isShowPopup: val
        })
    }

    checkOutSide = (e) =>{
        e.stopPropagation();
        if (!e.target.closest('.emoji-mart') && this.state.isShowPopup == true){
            this.setState({
                isShowPopup: false
            })
        }
    }

    setUser = (val, type) =>{
        this.setState({
            user: val,
            typeLogin:type
        })
    }

    isModal = (val) => {
        this.setState({
            visible: val
        });
    };

    render () {
        const {checkLogin, user, visible, typeLogin} = this.state
        return (
            <div className='containButton'>
            {
                user == null || user && user.status == "unknown" ? 
                    <Login 
                        checkLogin = {checkLogin}
                        setUser = {this.setUser}
                    />
                :
                    <div className="app__content" onClick={this.checkOutSide}>
                        {/* <h1>Hi {user.name} !!!</h1> */}
                        <div className="chat_window">
                            <i onClick={() => this.isModal(true)} className="sign-out fas fa-sign-out-alt" aria-hidden="true"></i>
                            <Messages type={typeLogin} messages={this.state.messages} typing={this.state.typing}/>
                            <Input 
                                input={this.state.input} 
                                sendMessage={this.sendnewMessage}
                                changeMessage = {this.changeMessage}
                                isShowPopup = {this.state.isShowPopup}
                                isPopup = {this.isPopup}
                                checkOutSide = {this.checkOutSide}
                            />
                        </div>
                        <ModalSignOut
                            isModal = {this.isModal}
                            visible = {visible}
                            setUser = {this.setUser}
                        />
                    </div>
            }
            </div>
        )
    }
}