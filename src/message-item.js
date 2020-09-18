import React from 'react';

export default class messageItem extends React.Component {
    render () {
        return (
            <li className={"message left appeared"}>
                <div className="avatar">{this.props.user}</div>
                <div className="text_wrapper">
                    <div className="text">{this.props.message}</div>
                </div>
            </li>
        )
    }
}