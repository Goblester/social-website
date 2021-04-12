import React from 'react';
import './Dialogs.module.css';
import {DialogType, MessageType, sendMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import WithAuthRedirect from '../../hoc/AuthRoute/WithAuthRedirect';
import {compose} from '@reduxjs/toolkit';

type MapStatePropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    sendMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages
});

const mapDispatchToProps: MapDispatchPropsType = {
    sendMessage
};


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);