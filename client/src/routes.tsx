import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/mainPage/MainPage'
import { CreateRecipePage } from './pages/createRecipePage/CreateRecipePage'
import { RegisterPage } from './pages/registerPage/RegisterPage'
import { RecipesPage } from './pages/recipesPage/RecipesPage'
import { Page404 } from './pages/page404/Page404'

export const getRoutes = (isUser: boolean) => {
  if (isUser) {
    return (
      <Routes>
        <Route path='/create' element={<CreateRecipePage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/recipes' element={<RecipesPage />} />
    </Routes>
  )
}
