import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Modal } from 'antd';

export default class ModalSignOut extends React.Component {
  
    signOut = () =>{
        const {setUser, isModal} = this.props;
        localStorage.removeItem('user')
        isModal(false)
        setUser(null, null)

    }

    render() {
        const {visible, isModal} = this.props
        return (
        <>
            <Modal
                title="Message !!!"
                visible={visible}
                onOk={this.signOut}
                onCancel={() => isModal(false)}
                okText="Ok"
                cancelText="Cancel"
            >
            <p> Bạn Có Muốn Thoát ?</p>
            </Modal>
        </>
        );
    }
}