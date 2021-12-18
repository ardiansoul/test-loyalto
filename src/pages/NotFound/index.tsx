import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../Components";
import { AppDispatch, RootState } from "../../redux/store";

interface Props { }

const NotFound: React.FC<Props> = (props) => {
    const { } = props;
    const params = useParams()
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback((action: any) => {
        dispatch(action);
    }, [])

    return (
        <Wrapper>
            <div className="w-full h-full p-4 flex overflow-hidden justify-center items-center">
                <h2 className={`text-${state.primary} text-4xl`}>
                    Route Not Found
                </h2>
            </div>
        </Wrapper>
    );
};

export default NotFound;
