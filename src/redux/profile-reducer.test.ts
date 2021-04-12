import profileReducer, {addPost, deletePost, PostType, ProfileType, setStatusAccept} from './profile-reducer';


type InitialStateType = {
    posts: Array<PostType>,
    profile: ProfileType | null,
    status: string
};

let state: InitialStateType;


beforeEach(() => {
    state = {
        posts: [
            {id: 1, message: 'Hi, How are you', likesCount: 13},
            {id: 2, message: 'My first post', likesCount: 20},
            {id: 3, message: 'My second post', likesCount: 15},
            {id: 4, message: 'bam bam bam', likesCount: 9999}
        ],
        profile: null,
        status: ''
    }
})


test('length of posts array should be incremented', () => {
    const text = 'heh';

    let newState = profileReducer(state, addPost(text));

    expect(newState.posts.length).toBe(5);
})

test('text of added post should be correct', () => {
    const text = 'i like you';
    const action = addPost(text)

    let newState = profileReducer(state, action);

    expect(newState.posts[newState.posts.length - 1].message).toBe('i like you');
});

test('length of posts array should be decremented', () => {

    const action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test(`length of posts array should't be changed if get incorrect id`, () => {

    const action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

test(`text of status should be correct`, () => {

    const action = setStatusAccept('1337');

    let newState = profileReducer(state, action);

    expect(newState.status).toBe('1337');
})