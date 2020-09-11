import React,{useState, useEffect} from 'react'
import './Buttons.scss'

const AuthenticatedButtons = () => {
  const [status, setStatus] = useState('loading')
  const [userData, setUserData] = useState({})

  useEffect(()=>{
    if(status === 'loading'){
      fetch('api/users/me',
      {
        method: 'GET',
        headers: {'Content-Type' : 'application-json'}
      })
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(console.log)
        .finally(()=> setStatus('loaded'))
    }
  }, [status]
  )

  if(status === 'loaded'){
    console.log(userData)
  }

  return (
    <section className="header__buttons">
      {status === 'loaded'? 
        userData.type === 'talent' ?
              <a href={`/profile/${userData.id}`}
                className="header__buttons__button header__buttons__button--login"
              >
                My Profile
              </a>
              :
              <a href={`/searchprofile/a`}
                className="header__buttons__button header__buttons__button--login"
              >
                My Profile
              </a>
      
      : null}

      <a href='/api/auth/logout'
        className="header__buttons__button header__buttons__button--signup"
      >
        Log out
      </a>
    </section>
  )
}

export default AuthenticatedButtons
