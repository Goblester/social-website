import {v1} from 'uuid';

export type DialogType = {
    id: string,
    name: string,
    photo: string
}

export type MessageType = {
    id: string,
    message: string,
    fromYou: boolean,
    photo: string
}

type InitialStateType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

const initialState: InitialStateType = {
    dialogs: [
        {
            id: v1(),
            name: 'Dimych',
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },
        {
            id: v1(),
            name: 'Segesa',
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },
        {
            id: v1(),
            name: 'Jeja',
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },
        {
            id: v1(),
            name: 'Olga',
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },
        {
            id: v1(),
            name: 'Seka',
            photo: 'http://i.imgur.com/EroY8Ii.png'
        }
    ],
    messages: [
        {
            id: v1(),
            message: 'sad',
            fromYou: true,
            photo: 'https://uznayvse.ru/images/content/2020/1/uzn_15788272160.jpg'
        },
        {
            id: v1(),
            message: 'Hi',
            fromYou: false,
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },
        {
            id: v1(),
            message: 'sad',
            fromYou: true,
            photo: 'https://uznayvse.ru/images/content/2020/1/uzn_15788272160.jpg'
        },
        {
            id: v1(),
            message: 'asddasdasdasd s das das das das das das as dasdas da',
            fromYou: false,
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },
        {
            id: v1(),
            message: 'sad',
            fromYou: true,
            photo: 'https://uznayvse.ru/images/content/2020/1/uzn_15788272160.jpg'
        },
        {
            id: v1(),
            message: 'Hi',
            fromYou: false,
            photo: 'http://i.imgur.com/EroY8Ii.png'
        },

    ]
};

function dialogsReducer(state: InitialStateType = initialState, action: DialogsActionTypes): InitialStateType {
    switch (action.type) {
        case 'social-network/dialogs/SEND-MESSAGE': {
            let newMessage = {
                id: v1(),
                message: action.message,
                fromYou: true,
                photo: 'https://uznayvse.ru/images/content/2020/1/uzn_15788272160.jpg'
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }

}

export type DialogsActionTypes = SendMessageActionType;

const SEND_MESSAGE = 'social-network/dialogs/SEND-MESSAGE';


export type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    message: string
};


export const sendMessage = (message: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        message
    }
}


export default dialogsReducer;