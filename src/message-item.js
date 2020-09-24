import React from 'react';

export default class messageItem extends React.Component {
    constructor(props) {
        super(props);
        //Khởi tạo state,
        this.state = {
            checkIsMine: ''
        }
    }

    isMine = () =>{
        const user = JSON.parse(localStorage.getItem("user"));
        if(this.props.type == 0){
            if(this.props.user == user.name){
                this.setState({
                    checkIsMine: 'is-mine'
                })
            }
        }else if(this.props.type == 1){
            if(this.props.user == user.profileObj.name){
                this.setState({
                    checkIsMine: 'is-mine'
                })
            }
        }
    }

    componentWillMount(){
        this.isMine()
    }

    render () {
        return (
            <li>
                <div className="nameTag">{this.props.user}</div>
                <div className={"message left appeared"}>
                    <div className="avatar"><img src={this.props.url} /></div>
                    <div className={`text_wrapper ${this.state.checkIsMine}`}>
                        <div className="text">{this.props.message}</div>
                    </div>
                </div>
            </li>
        )
    }
}