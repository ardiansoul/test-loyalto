import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, Wrapper } from "../../Components";
import { onShowSidebar } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";

interface Props { }

const Home: React.FC<Props> = (props) => {
    const { } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = (action: any) => {
        dispatch(action);
    }


    return (
        <Wrapper>
            <h1>
                text center
            </h1>
            <button onClick={() => dispatch(onShowSidebar(!state.sidebar))}>
                cener
            </button>
        </Wrapper>
    );
};

export default Home;
