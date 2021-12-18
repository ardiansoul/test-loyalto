import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheme, onShowSidebar } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";
import { Menu } from "react-feather"

interface Props { }

const Navbar: React.FC<Props> = (props) => {
    const { } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback(async (action: any) => {
        dispatch(action);
    }, []);


    return (
        <div className={`w-full h-24 bg-${state.primaryBackground}`}>
            <div className="w-full h-full flex justify-between items-center px-10">

                <button onClick={() => appDispatch(onShowSidebar(!state.sidebar))}>
                    <Menu color={state.primary} width={"2em"} height={"2em"} />
                </button>
                <h1>CONTENT</h1>
            </div>
        </div>
    );
};

export default Navbar;
