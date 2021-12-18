import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";

interface Props { item: any }

const Card: React.FC<Props> = (props) => {
    const { item } = props;
    const navigation = useNavigate()
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback((action: any) => {
        dispatch(action);
    }, [])

    return (
        <button className="w-2/12 h-auto p-2" onClick={() => navigation(`/movie/${item.id}`, { replace: true })}>
            <div className="w-full h-auto">
                <img className="w-full h-full object-center object-contain" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            </div>
            <h3 className={`text-${state.primary} text-base text-center`}>{item.title}</h3>
        </button >
    );
};

export default Card;
