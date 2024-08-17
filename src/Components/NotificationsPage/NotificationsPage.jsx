// import React from 'react';
import PropTypes from 'prop-types';
import './NotificationsPage.css';
import Notification from '../Notification/Notification';

const NotificationsPage = ({ notifications, toggleReadStatus, markAllAsRead, unreadCount }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h3>Notifications <span className="notiCount">{unreadCount}</span></h3>
          <h5 className="readAll" onClick={markAllAsRead}>
            {unreadCount === 0 ? 'Mark All As Unread' : 'Mark All As Read'}
          </h5>
        </header>
        <div className="notiContainer">
          {notifications.map((noti, index) => (
            <Notification
              key={noti.id}
              notification={noti}
              toggleReadStatus={() => toggleReadStatus(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

NotificationsPage.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      extraDetail: PropTypes.string,
      time: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired,
      privateMsg: PropTypes.string,
      imgComment: PropTypes.string,
    })
  ).isRequired,
  toggleReadStatus: PropTypes.func.isRequired,
  markAllAsRead: PropTypes.func.isRequired,
  unreadCount: PropTypes.number.isRequired,
};

export default NotificationsPage;
