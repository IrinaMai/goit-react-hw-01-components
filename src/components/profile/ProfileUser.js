import React from 'react';
import PropTypes from 'prop-types';
import './ProfileUser.css'

export default function ProfileUser({ user }) {
    const {avatar, name, tag, location, stats} = user
    return (
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
      width = "100px"
    />
    <h2 className="name">{name}</h2>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span><br/>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span><br/>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span><br/>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}

ProfileUser.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.object,
    }),
};




