import { Route, Routes } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import { routes } from './routes'
const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => <Route key={index} {...route} element={<AuthRoute {...route} />} />)}
        </Routes>
    )
}

export default AppRouter
