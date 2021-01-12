import React from 'react';
import style from './FriendList.module.css'

const FriendItem = ({ friends }) => {
    return (
        friends.map(friend => {
            const stat = (friend.isOnline ? style.isOnline : style.isOffline);
        return (
            <li className={style.item} key={friend.id}>
                <span className = {stat} ></span>
                <img className={style.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
            </li>
        );
    })
        
    )
  
}

export default FriendItem