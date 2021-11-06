import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
    element: ReactElement,
    private?: boolean,
    path?: string
}

const AuthRoute: React.FC<Props> = (props) => {
    const auth = { user: false }
    const location = useLocation()
    if (props.private) {
        if (!auth.user) {
            return <Navigate to="/" state={{ from: location }} />
        }
        return props.element
    }
    return props.element
}
export default AuthRoute
