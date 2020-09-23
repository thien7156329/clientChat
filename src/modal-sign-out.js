import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Modal } from 'antd';

export default class ModalSignOut extends React.Component {
  
    signOut = () =>{
        const {setUser, isModal} = this.props;
        localStorage.removeItem('user')
        localStorage.removeItem('loginType')
        isModal(false)
        setUser(null, null)
        window.location = "https://clientchat.herokuapp.com/"
    }

    render() {
        const {visible, isModal} = this.props
        return (
        <>
            <Modal
                title="Thông Báo !!!"
                visible={visible}
                onOk={this.signOut}
                onCancel={() => isModal(false)}
                okText="Xác Nhận"
                cancelText="Thoát"
            >
            <p> Bạn Có Muốn Thoát ?</p>
            </Modal>
        </>
        );
    }
}