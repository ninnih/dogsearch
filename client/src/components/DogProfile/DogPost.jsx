import React from 'react'

import './DogPost.scss'
import Blank from '../../assets/images/blank-profile-picture.png'

const DogPost = ({data}) => {
  return (
    <article className="post">
      <article className="post__header">
        <article className="post__header__text">
          <h4 className="post__header__text__title">A post example</h4> 
          <h5 className="post__header__text__posted">Posted at 14:00 by Jane Doe</h5>
        </article>
        <img src={data.image ? `${data.image}` : `${Blank}`} alt="" className="post__header__img"/>
      </article>
      <article className="post__content">
        <p className="post__content__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eius provident ipsum assumenda enim quaerat culpa recusandae vitae? </p>
      </article>
    </article>
  )
}

export default DogPost;
