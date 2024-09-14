import { useState, useEffect } from 'react'

// react router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom'

// layout
import PageLayout from './layout/PageLayout'
import PlayersLayout from './layout/PlayersLayout'

// pages
import PlayerDetailPage from './pages/PlayerDetailPage'
import PlayerAddPage from './pages/PlayerAddPage'
import PlayerEditPage from './pages/PlayerEditPage'
import PlayerListPage from './pages/PlayerListPage'
import Home from './pages/Home'

// context
import { ThemeContext } from './Contexts/ThemeContext'

import preloadImages from './utils/preloadImages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageLayout />} >
      <Route index element={<Home />} />
      <Route path='players' element={<PlayersLayout />} >
        <Route index element={<Navigate to="men" replace />} />
        <Route path='men' element={<PlayerListPage playerGender={"men"} />} />
        <Route path='women' element={<PlayerListPage playerGender={"women"} />} />        
        <Route path='men/new' element={<PlayerAddPage playerGender={"men"} />} />
        <Route path='women/new' element={<PlayerAddPage playerGender={"women"} />} />
        <Route path='men/:id/:slug' element={<PlayerDetailPage playerGender={"men"} />} />
        <Route path='women/:id/:slug' element={<PlayerDetailPage playerGender={"women"} />} />
        <Route path='men/:id/:slug/edit' element={<PlayerEditPage playerGender={"men"} />} />
        <Route path='women/:id/:slug/edit' element={<PlayerEditPage playerGender={"women"} />} />
      </Route>
    </Route>
  )
)

const App = () => {

  useEffect(() => {
    preloadImages(); // Pozivamo funkciju kada se komponenta mount-uje
  }, []);

  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App