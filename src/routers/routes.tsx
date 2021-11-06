import { ReactElement } from "react"
import { Home } from "../pages"

interface Route {
    path: string,
    element: ReactElement,
    private?: boolean
}

export const routes: Route[] = [
    { path: "/", element: <Home />, private: false },
    { path: "/home", element: <Home />, private: true }
]
