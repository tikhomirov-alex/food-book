import React, { useState } from 'react'
import './imageLoader.css'
import plus from '../../assets/img/pink-plus.png'
import placeholder from '../../assets/img/placeholder.png'

export const ImageLoader: React.FC = () => {


  return (
    <div className='imageLoader'>
      <div className='loader'>
        <input className='imageInput' id='img-input' type='file' />
        <img className='placeholder' src={placeholder} alt='loader-preview' />
        <label className='imageInputLabel' htmlFor='img-input'></label>
        <img className='plus' src={plus} alt='plus' />
        <div className='backdrop'></div>
      </div>
      <div className='delete'>
        <i className='fa-sharp fa-solid fa-trash'></i>
      </div>
    </div>
  )
}
