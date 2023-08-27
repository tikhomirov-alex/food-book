import React from 'react'
import styles from './createRecipe.module.css'
import { ImageLoader } from '../../components/imageLoader/ImageLoader'

export const CreateRecipePage: React.FC = () => {
  return (
    <section className={`create text-white ${styles}`}>
      <h1 className='text-center mt-4'>Добавление рецепта</h1>
      <form className='container'>
        <div className='col-md-6 offset-md-3'>
          <div className='mb-3 mt-5'>
            <label htmlFor='recipe-title' className='required'>
              Название рецепта
            </label>
            <input type='text' placeholder='Введите название рецепта' />
          </div>
          <div className='mb-3'>
            <label htmlFor='recipe-title' className='required'>
              Фотографии готового блюда
            </label>
            <div className={styles.recipe_photos}>
              <ImageLoader />
              <ImageLoader />
              <ImageLoader />
              <ImageLoader />
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
