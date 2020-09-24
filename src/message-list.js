import React from 'react';
import Message from './message-item';


export default class MessageItem extends React.Component {
    render () {
        return (
            <ul className="messages">
                {this.props.messages.map(item =>
                    <Message type={this.props.type} key={item.id} url={item.url} user={item.user} message={item.message}/>
                )}
            </ul>
        )
    }
}