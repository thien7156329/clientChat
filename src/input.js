import React from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        //Khởi tạo state,
        this.state = {
            value: this.props.input,
            isShowPopup: false
        }
    }

    componentWillMount() {
        this.setState({
            value: this.props.input
        })
    }
    checkEnter(e) {
        this.props.changeMessage(this.state.value)
        if (e.keyCode === 13) {
            this.props.sendMessage();
            this.setNull()
        }
    }
    setValue = (e) =>{
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
            isShowPopup: false
        })
    }

    isPopup = () =>{
        this.setState({
            isShowPopup: true
        })
    }

    render () {
        const { isShowPopup } = this.state 
        return (
           <div className="">
                <div onClick={this.isPopup}>Icon</div>
                <div className="bottom_wrapper">
                    <div  className="message_input_wrapper">
                            <input value={this.state.value} type="text" className="message_input" placeholder="Type your message here" onChange={this.setValue} onKeyUp={this.checkEnter.bind(this)} />
                    </div>
                    <div className="send_message" onClick={() => (this.props.sendMessage(), this.setNull())} ref="inputMessage" >
                            <div className='icon'></div>
                            <div className='text'>Send</div>
                    </div>
                </div>
                <div className={isShowPopup ? '' : 'd-none'}>
                    <Picker onSelect={this.addEmoji} />
                </div>
           </div>
        )
    }
}