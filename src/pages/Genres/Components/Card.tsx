import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

interface Props { name: string }

const Card: React.FC<Props> = (props) => {
    const { name } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback((action: any) => {
        dispatch(action);
    }, [])

    return (
        <div className="h-10 px-4 border-2">
            <h1>{name}</h1>
        </div>
    );
};

export default Card;
