import React from 'react';
import $ from 'jquery';
import Messages from './message-list';
import Input from './input';
import _map from 'lodash/map';
import io from 'socket.io-client';
import Login from './login';
import ModalSignOut from './modal-sign-out';
import { Button, notification } from 'antd';

import './App.css';
var status = $('#status');
var timeOut
export default class App extends React.Component {
   constructor(props) {
       super(props);
       //Khởi tạo state,
       this.state = {
           messages: [],
           user: null,
           input: '',
           badge: 0,
           isShowPopup: false,
           checkLogin: false,
           visible: false,
           typeLogin: localStorage.getItem('loginType') || null,
           clickNotify: true,
           isTyping: '',
       }
       this.socket = null;
   }
   //Connect với server nodejs, thông qua socket.io
   componentWillMount() {
        this.socket = io(process.env.REACT_APP_SERVER);
        // this.socket = io("localhost:6969");
        this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
        this.socket.on('newMessage', (response) => {this.newMessage(response)});
        this.socket.on('typing', (response) => {this.getTyping(response)});
   }

   componentDidMount(){
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        })
   }

   newMessage(m) {
        let objMessage = $('.messages');
        const {typeLogin, user} = this.state
        const messages = this.state.messages;
        let ids = _map(messages, 'id');
        let max = parseInt(Math.max(...ids)) || 0;
        messages.push({
            id: max+1,
            user: m.user,
            message: m.data,
            url: m.url
        });
        if(typeLogin == 1 && m.user != user.profileObj.name || typeLogin == 0  && m.user != user.name){
            this.setState({
                badge: this.state.badge + 1,
                isTyping: ""
            })
        }
        if (objMessage && objMessage[0] && (objMessage[0].scrollHeight - objMessage[0].scrollTop) === objMessage[0].clientHeight ) {
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
                user: this.state.user.name || null,
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

    setBadge = () =>{
        this.setState({
            badge: 0
        })
    }

    badgeChange = () =>{
        this.setBadge()
    }

    openNotification = () => {
        const {clickNotify} = this.state
        if(clickNotify){
            this.setState({
                clickNotify: false
            })
            this.badgeChange()
            notification.open({
                message: "Tin Nhắn Mới",
                description: ( 
                <div className="notification-wait">
                    {"Bạn Có " + this.state.badge + " tin nhắn chờ" }
                </div>),
                className: "notification",
                duration: 2,
                onClose: () =>{
                    this.setState({
                        clickNotify: true
                    })
                }
            });
        }

    };

    sendTyping = (users) =>{
        const {typeLogin} = this.state
        let data = {}
        if(typeLogin == 0){
            data = {
                user: users.name || null,
            }
        }else if(typeLogin == 1){
            data = {
                user: (users.profileObj.name || null) ,
            }
        }
        this.socket.emit("typing", data); //gửi event về server
    }

    getTyping = (data) =>{
        const {typeLogin, user} = this.state
        if(typeLogin == 1 && data.user != user.profileObj.name || typeLogin == 0  && data.user != user.name){
            this.setState({
                isTyping: data.user
            })
            clearTimeout(timeOut)
            timeOut= setTimeout(() =>{
                this.setState({
                    isTyping: ""
                })
            }, 3000)
        }
    }

    render () {
        const {checkLogin, user, visible, typeLogin, badge, isTyping, input} = this.state
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
                    <div className="badge-block" onClick={this.openNotification}>
                        <div className="far fa-bell icon-badge"></div>
                        <span className={badge == 0 ? 'd-none' : "e-badge e-badge-info e-badge-overlap e-badge-notification" }>{badge}</span>
                    </div>
                    <div className="chat_window" onClick={this.setBadge}>
                        <i onClick={() => this.isModal(true)} className="sign-out fas fa-sign-out-alt" aria-hidden="true"></i>
                        <Messages type={typeLogin} messages={this.state.messages} typing={this.state.typing}/>
                        <p className={ isTyping ? `typing` : `d-none`} id="typing">{isTyping} is typing...</p>
                        <Input 
                            input={input} 
                            sendMessage={this.sendnewMessage}
                            sendTyping={this.sendTyping}
                            changeMessage = {this.changeMessage}
                            isShowPopup = {this.state.isShowPopup}
                            isPopup = {this.isPopup}
                            checkOutSide = {this.checkOutSide}
                            user={user}
                            isTypingNull = {this.isTypingNull}
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