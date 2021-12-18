import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../Components";
import { onShowSidebar } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";
import Navbar from "../Navbar";

interface Props { }

const Wrapper: React.FC<Props> = (props) => {
    const { children } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = (action: any) => {
        dispatch(action);
    }


    return (
        <div className={`w-screen h-screen flex flex-row`}>
            <Sidebar show={state.sidebar} onHide={() => dispatch(onShowSidebar(!state.sidebar))} />
            <div className={`w-full h-full ${state.sidebar ? "w-9/12 " : ""}flex flex-col`}>
                <Navbar />
                <div className={`w-full h-5/6`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
