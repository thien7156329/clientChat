import React from 'react';

export default class messageItem extends React.Component {
    render () {
        return (
            <li>
                <div className="nameTag">{this.props.user}</div>
                <div className={"message left appeared"}>
                    <div className="avatar"><img src={this.props.url} /></div>
                    <div className="text_wrapper">
                        <div className="text">{this.props.message}</div>
                    </div>
                </div>
            </li>
        )
    }
}