
import React, { useState, useEffect } from 'react';
import './App.css';
import NotificationsPage from './Components/NotificationsPage/NotificationsPage'
import MarkWebber from './assets/images/avatar-mark-webber.webp';
import AngelaGray from './assets/images/avatar-angela-gray.webp';
import JacobThompson from './assets/images/avatar-jacob-thompson.webp';
import RizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp';
import KimberlySmith from './assets/images/avatar-kimberly-smith.webp';
import NathanPeterson from './assets/images/avatar-nathan-peterson.webp';
import AnnaKim from './assets/images/avatar-anna-kim.webp';
import ChessImage from './assets/images/image-chess.webp';

const App = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      imgSrc: MarkWebber,
      name: 'Mark Webber',
      action: 'reacted to your recent post',
      extraDetail: 'My first tournament today!',
      time: '1m Ago',
      read: false,
    },
    {
      id: 2,
      imgSrc: AngelaGray,
      name: 'Angela Gray',
      action: 'followed you!',
      time: '5m Ago',
      read: false,
    },
    {
      id: 3,
      imgSrc: JacobThompson,
      name: 'Jacob Thompson',
      action: 'has joined your group',
      extraDetail: 'Chess Club!',
      time: '1d Ago',
      read: false,
    },
    {
      id: 4,
      imgSrc: RizkyHasanuddin,
      name: 'Rizky Hasanuddin',
      action: 'sent you a private msg.',
      time: '5 days Ago',
      read: true,
      privateMsg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      id: 5,
      imgSrc: KimberlySmith,
      name: 'Kimberly Smith',
      action: 'commented on your picture',
      time: '1 week Ago',
      read: true,
      imgComment: ChessImage,
    },
    {
      id: 6,
      imgSrc: NathanPeterson,
      name: 'Nathan Peterson',
      action: 'reacted to your recent post',
      extraDetail: 'end game strategies to increase your win rate',
      time: '2 weeks Ago',
      read: true,
    },
    {
      id: 7,
      imgSrc:AnnaKim ,
      name: 'Anna Kim',
      action: 'left the group',
      extraDetail: 'Chess Club',
      time: '2 weeks Ago',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(noti => !noti.read).length;

  useEffect(() => {
    document.title = `Notifications (${unreadCount})`;
  }, [notifications]);

  const toggleReadStatus = (index) => {
    setNotifications(notifications.map((noti, i) =>
      i === index ? { ...noti, read: !noti.read } : noti
    ));
  };

  const markAllAsRead = () => {
    const allRead = unreadCount === 0;
    setNotifications(notifications.map(noti => ({
      ...noti,
      read: !allRead
    })));
  };

  return (
    <div>
      <NotificationsPage
        notifications={notifications}
        toggleReadStatus={toggleReadStatus}
        markAllAsRead={markAllAsRead}
        unreadCount={unreadCount}
      />
    </div>
  );
};

export default App;
