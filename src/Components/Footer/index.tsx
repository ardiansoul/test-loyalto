import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheme } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";

interface Props { }

const Footer: React.FC<Props> = (props) => {
    const { } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback(async (action: any) => {
        dispatch(action);
    }, []);


    return (
        <div className={`w-screen h-screen flex justify-center items-center bg-${state.primary}`}>
            <h1>{state.primary}</h1>
            <h3 className={`text-${state.secondary}`}>{state.theme}&nbsp;</h3>
            <h1 className={`text-${state.secondary}`}>theme will change if you click the&nbsp;</h1>
            <button className={`text-${state.secondary}`} onClick={() => { appDispatch(loadTheme()) }}>change button</button>
        </div>
    );
};

export default Footer;
