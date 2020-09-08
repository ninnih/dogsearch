import React from 'react'
import './LoggedInNav.scss'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import ExampleImageOne from '../../assets/images/1.jpg'

const LoggedInNav = () => {
  return (
    <section className="secondarynav">
      <article className="secondarynav__back"><h3><ArrowBackIcon/>Back to search</h3></article>
      <article className="secondarynav__profile">
        <article className="secondarynav__profile__link"><MailOutlineIcon/><h5>Messages</h5></article>
        <article className="secondarynav__profile__link"><DateRangeIcon /><h5>Calendar</h5></article>
        <article className="secondarynav__profile__link"><NotificationsNoneIcon /><h5>Notifications</h5></article>
        <img src={ExampleImageOne} alt="" className="secondarynav__profile__img"/>
      </article>
    </section>
  )
}

export default LoggedInNav;