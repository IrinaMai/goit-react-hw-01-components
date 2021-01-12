import React from 'react';
import FriendItem from './FriendItem';
import style from './FriendList.module.css'


const FriendList = ({ friends }) => {
    return (
        <ul className={style.list}>
            <FriendItem friends = {friends} />
        </ul>
    );
    
}

export default FriendList;