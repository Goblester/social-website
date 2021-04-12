
type FriendType = {
    id: number,
    name: string,
    photo: string
}


type NavigationPageType = {
    friends: Array<FriendType>
}

const initialState: NavigationPageType = {
    friends: [{
        id: 1,
        name: "supersus",
        photo: "https://memepedia.ru/wp-content/uploads/2020/06/super-sus-mem-4-360x270.jpg"
    },
        {
            id: 2,
            name: "kukech",
            photo: "https://i.ytimg.com/vi/YycYQd0Vztw/hqdefault.jpg"
        },
        {
            id: 3,
            name: "tatataa",
            photo: "http://i.imgur.com/EroY8Ii.png"
        }]
};

const navigationReducer = (state: NavigationPageType = initialState, action: NavigationActionTypes) => {
    return state;
}

export type NavigationActionTypes = {}

export default navigationReducer;

