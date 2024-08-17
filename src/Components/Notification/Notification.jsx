// import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ notification, toggleReadStatus }) => {
  return (
    <li
      className={`notification ${notification.read ? '' : 'unread'}`}
      onClick={toggleReadStatus}
    >
      <img src={notification.imgSrc} alt={notification.name} className="user-avatar" />
      <div className="notification-content">
        <p>
          <strong>{notification.name}</strong> {notification.action}
          {notification.extraDetail && (
            <a href="#" className="extraDetail">{notification.extraDetail}</a>
          )}
          {!notification.read && <span className="unread-dot"></span>}
        </p>
        <span className="time">{notification.time}</span>
        {notification.privateMsg && (
          <div className="message-box">
            <p>{notification.privateMsg}</p>
          </div>
        )}
      
      </div>
      {notification.imgComment && (
          <img src={notification.imgComment} alt="Comment" className="comment-picture" />
        )}
    </li>
  );
};

Notification.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    extraDetail: PropTypes.string,
    time: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    privateMsg: PropTypes.string,
    imgComment: PropTypes.string,
  }).isRequired,
  toggleReadStatus: PropTypes.func.isRequired,
};

export default Notification;
