import { Route, Routes } from 'react-router-dom'
import { Detail, Genres, Movies, NotFound } from '../pages'
import AuthRoute from './AuthRoute'
import { routes } from './routes'
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/list-movies" element={<Movies />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/list-genres" element={<Genres />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter
