import React from 'react';
import './Dialogs.module.css';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import DialogsForm from './DialogsForm';


function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogs
        .map(d => {
            return (
                    <DialogItem name={d.name} key={d.id} photo={d.photo}/>
            )
        });

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} fromYou={m.fromYou}
                                                            photo={m.photo}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.allMessages}>
                    {messagesElements}
                </div>
                <div className={s.newMessage}>
                    <DialogsForm sendMessage={props.sendMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;