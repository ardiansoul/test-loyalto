import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import Logo from "../../assets/images/logo.png"

interface Props {
    show: boolean,
    onHide: Function
}

const Sidebar: React.FC<Props> = (props) => {
    const { onHide, show } = props;
    const state = useSelector((state: RootState) => state.app);
    const navigation = useNavigate()

    const onNavigate = (route: string) => {
        onHide()
        navigation(route, { replace: true })
    }


    return (
        <div className={`w-0 ${show ? "w-3/12" : ""} overflow-hidden h-full bg-${state.primaryBackground}`}>
            <div className={`w-full h-full flex flex-col`}>
                <div className={`w-full h-20 flex justify-center items-center`}>
                    <div className="w-full h-16">
                        <img src={Logo} className="w-full h-full object-center object-contain" />
                    </div>
                </div>
                <button className="w-full py-2 border-t-2 border-b-2" onClick={() => onNavigate("/list-genres")}>
                    <span>Genres</span>
                </button>
                <button className="w-full py-2 border-t-2 border-b-2" onClick={() => onNavigate("/list-movies")}>
                    <span>Movies</span>
                </button>
            </div>

        </div>
    );
};

export default Sidebar;
