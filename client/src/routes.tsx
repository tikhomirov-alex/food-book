import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/mainPage/MainPage'
import { CreateRecipePage } from './pages/createRecipePage/CreateRecipePage'
import { RecipesPage } from './pages/recipesPage/RecipesPage'
import { Dashboard } from './pages/dashboard/Dashboard'

export const getRoutes = (isUser: boolean, isAdmin: boolean = false) => {
  if (isUser) {
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/create' element={<CreateRecipePage />} />

        {isAdmin ? <Route path='/dashboard' element={<Dashboard />} /> : null}
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
