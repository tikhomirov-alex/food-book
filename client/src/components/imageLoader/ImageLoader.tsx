import React, { ChangeEvent, useRef, useState } from 'react'
import './imageLoader.css'
import plus from '../../assets/img/pink-plus.png'
import { uploadFile } from 'actions/uploadFile'
import { ICustomSize } from 'component.props'

export const ImageLoader: React.FC<ICustomSize> = (props) => {
  const url = 'http://127.0.0.1:5000/'
  const placeholder = `${url}upload/service/placeholder.png`
  const [image, setImage] = useState<string>(placeholder)

  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = async (event: ChangeEvent) => {
    event.preventDefault()
    if (inputRef && inputRef.current && inputRef.current.files) {
      try {
        const data: { filePath: string } = await uploadFile(
          inputRef.current.files[0]
        )
        const imagePath = `${url}upload${data.filePath}`
        setImage(imagePath)
      } catch (err) {
        // Error message
      }
    } else {
      setImage(placeholder)
    }
  }

  const onDelete = () => {
    setImage(placeholder)
  }

  return (
    <div className='imageLoader'>
      <div className='loader' style={{ width: props.width, height: props.height }}>
        <img className='placeholder' src={image} alt='loader-preview' />
        <label className='imageInputLabel'>
          <input
            ref={inputRef}
            className='imageInput'
            type='file'
            accept='.jpg,.jpeg,.png'
            onChange={onChange}
          />
        </label>
        <img className='plus' src={plus} alt='plus' />
        <div className='backdrop'></div>
      </div>
      <div className='delete' onClick={onDelete}>
        <i className='fa-sharp fa-solid fa-trash'></i>
      </div>
    </div>
  )
}
