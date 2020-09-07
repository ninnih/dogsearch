import React from 'react'
import ProfileInfo from './ProfileInfo';
import ProfileAbout from './ProfileAbout';
import ProfileContent from './ProfileContent';
import ProfileLinks from './ProfileLinks';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import ProfileCalendar from './ProfileCalendar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './Profile.scss'
import ProfileContact from './ProfileContact';

const Profile = (props) => {
  const [openProfile, setOpenProfile] = React.useState(true);
  const [openCalendar, setOpenCalendar] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);

  const viewCalendar = () => {
    setOpenCalendar(true)
    setOpenProfile(false)
    setOpenContact(false)
  }

  const viewContact = () => {
    setOpenContact(true)
    setOpenProfile(false)
    setOpenCalendar(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenCalendar(false)
    setOpenContact(false)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  // window.onscroll = function() {scrollFunction()};

  // const scrollFunction = () => {
  // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("scrolltop").style.display = "block";
  //   } else {
  //     document.getElementById("scrolltop").style.display = "none";
  //   }
  // }

  // const scrollTop = () => {
  //   window.scrollTo({top: 0, behavior: 'smooth'});
  // }

  return (
    <>
      <LoggedInNav />
      <main className="profile">
        <section className="profile__content">
          <ProfileInfo viewCalendar={viewCalendar} viewContact={viewContact} viewProfile={viewProfile}/>
          {openProfile ? <><ProfileLinks/><ProfileContent /></> : null }
          {openCalendar ? <><section className="profilenav">
                              <a href="#images"><h3 className="profilenav__link">Calendar</h3></a>
                            </section><ProfileCalendar /></> : null}
          {openContact ? <><section className="profilenav">
                              <a href="#images"><h3 className="profilenav__link">Contact</h3></a>
                            </section><ProfileContact /></> : null}
          <ProfileAbout />
        </section>
        {/* <a href="" className="profile__scroll" id="scrolltop" onClick={(e) => {
            e.preventDefault();
            scrollTop()
            }}> */}
        <a>
          <ArrowUpwardIcon/>
        </a>
      </main>
    </>
  )
}

export default Profile
