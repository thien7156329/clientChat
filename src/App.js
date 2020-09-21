import React from 'react';
import $ from 'jquery';
import Messages from './message-list';
import Input from './input';
import _map from 'lodash/map';
import io from 'socket.io-client';

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
           isShowPopup: false
       }
       this.socket = null;
   }
   //Connetct với server nodejs, thông qua socket.io
   componentWillMount() {
       this.socket = io('localhost:6969');
       this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
       this.socket.on('newMessage', (response) => {this.newMessage(response)}); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
   }
   //Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình
   newMessage(m) {
       const messages = this.state.messages;
       let ids = _map(messages, 'id');
       let max = parseInt(Math.max(...ids)) || 0;
       messages.push({
           id: max+1,
           user: m.user,
           message: m.data
       });

       let objMessage = $('.messages');
       if (objMessage[0].scrollHeight - objMessage[0].scrollTop === objMessage[0].clientHeight ) {
           this.setState({messages});
           objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300); //tạo hiệu ứng cuộn khi có tin nhắn mới

       } else {
           this.setState({messages});
           if (m.id === this.state.user) {
               objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);
           }
       }
   }
   //Gửi event socket newMessage với dữ liệu là nội dung tin nhắn
    sendnewMessage = () => {
        let data = {
            user: window.location.pathname.substring(1),
            data: this.state.input
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

    render () {
        return (
            <div className="app__content" onClick={this.checkOutSide}>
                {/* <h1>Chat Message</h1> */}
                <div className="chat_window">
                    <Messages messages={this.state.messages} typing={this.state.typing}/>
                    <Input 
                        input={this.state.input} 
                        sendMessage={this.sendnewMessage}
                        changeMessage = {this.changeMessage}
                        isShowPopup = {this.state.isShowPopup}
                        isPopup = {this.isPopup}
                        checkOutSide = {this.checkOutSide}
                    />
                </div>
            </div>
        )
    }
}