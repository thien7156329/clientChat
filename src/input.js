import React from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        //Khởi tạo state,
        this.state = {
            value: this.props.input,
        }
    }
    checkEnter(e) {
        this.props.changeMessage(this.state.value)
        this.props.sendTyping(this.props.user)
        if (e.keyCode === 13) {
            this.props.sendMessage();
            this.setNull()
        }
    }
    setValue = (e) =>{
        this.props.sendTyping(this.props.user)
        this.setState({
            value: e.target.value
        })
    }

    setNull = () =>{
        this.setState({
            value: ''
        })
    }

    addEmoji = (emoji) => {
        this.setState({
            value: this.state.value + emoji.native,
        })
        setTimeout(
            this.props.changeMessage(this.state.value + emoji.native)   
        , 3000)
    }

    isPopups = (val) =>{
        this.props.isPopup(val)
    }

    render () {
        const { isShowPopup } = this.props 
        return (
           <div>
                <div className="bottom_wrapper">
                    <div  className="message_input_wrapper">
                        <div className="input-group mb-3">
                            <input id="myInput" value={this.state.value} type="text" className="message_input" placeholder="Nhập Tin Nhắn ..." onChange={this.setValue} onKeyUp={this.checkEnter.bind(this)} />
                            <div className="input-group-prepend">
                                <i onClick={() => this.props.isPopup(true)} className="icon far fa-smile" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="send_message" onClick={() => (this.props.sendMessage(), this.setNull())} ref="inputMessage" >
                        <div className='icon'></div>
                        <div className='text'>Gửi</div>
                    </div>
                </div>
                <div className={isShowPopup ? 'ABC' : 'd-none'} onClick={this.checkOutSide}>
                    <Picker onSelect={this.addEmoji} />
                </div>
           </div>
        )
    }
}