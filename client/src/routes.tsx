import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/mainPage/MainPage'
import { CreateRecipePage } from './pages/createRecipePage/CreateRecipePage'
import { RecipesPage } from './pages/recipesPage/RecipesPage'
import { Page404 } from './pages/page404/Page404'

export const getRoutes = (isUser: boolean) => {
  if (isUser) {
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/create' element={<CreateRecipePage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/recipes' element={<RecipesPage />} />
    </Routes>
  )
}
