import React, {ComponentType} from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import MyPostsForm from './MyPostsForm';


const MyPosts = React.memo<ComponentType<MyPostsPropsType>>((props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <MyPostsForm addPost={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;