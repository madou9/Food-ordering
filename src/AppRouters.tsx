import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'

const AppRouters = () => {
  return (
    <Routes>
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route path='/' element={<Layout showHero><HomePage /></Layout>} />
        <Route path='/user-profile' element={<Layout><UserProfilePage /></Layout>} />
        <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouters