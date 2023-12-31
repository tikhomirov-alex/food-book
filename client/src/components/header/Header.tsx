import React from 'react'
import styles from './header.module.css'
import { IHeaderProps } from '../../component.props'
import { HeaderAuth } from '../headerAuth/HeaderAuth'

export const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <header
      className={`${styles.header} row text-center text-white align-items-center`}
    >
      <div className='col-sm-12 col-lg-3'>
        <a href='/'>
          <img alt='mainLogo' src='https://placehold.co/180x60.png' />
        </a>
      </div>
      <div className='col-sm-12 col-lg-6'>
        <nav className={styles.menu}>
          <ul className={styles.menu_items_list}>
            <li className={styles.menu_item}>
              <a href='/recipes' className={styles.menu_item_link}>
                Рецепты
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href='#p2' className={styles.menu_item_link}>
                Page 2
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href='#p3' className={styles.menu_item_link}>
                Page 3
              </a>
            </li>
            {props.userId ? (
              <li className={styles.menu_item}>
                <a href='/create' className={styles.menu_item_link}>
                  Добавить рецепт
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
      <div className='col-sm-12 col-lg-3'>
        <HeaderAuth {...props} />
      </div>
    </header>
  )
}
