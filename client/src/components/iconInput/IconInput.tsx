import React from 'react'
import { IIconInput } from '../../component.props'
import styles from './iconInput.module.css'

export const IconInput: React.FC<IIconInput> = (props) => {
  return (
    <div className={styles.inputWithIcon}>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        id={props.id}
      />
      <i className={props.iconClasses} aria-hidden='true'></i>
    </div>
  )
}
