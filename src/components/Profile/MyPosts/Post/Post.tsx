import React from 'react';
import './Post.module.css';
import s from "./Post.module.css";

type PostPropsType = {
    message : string
    likesCount: number
}


function Post({message, likesCount}:PostPropsType) {
    return (
        <div className={s.item}>
            {message}
            <div>
                {likesCount} likes
            </div>
        </div>
    );
}

export default Post;