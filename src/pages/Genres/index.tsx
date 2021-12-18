import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../Components";
import { getGenres } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";
import Card from "./Components/Card";

interface Props { }

const Genres: React.FC<Props> = (props) => {
    const { } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback((action: any) => {
        dispatch(action);
    }, [])

    useEffect(() => {
        appDispatch(getGenres())
    })


    return (
        <Wrapper>
            <div className={"w-full h-full p-6 overflow-hidden"}>
                <h1 className={`py-2 text-${state.primary} font-bold text-2xl`}>List Genres</h1>
                <div className={"w-full h-full overflow-scroll py-4"}>
                    {
                        state.genres.map((item) => <Card name={item.name} />)
                    }
                </div>
            </div>
        </Wrapper>
    );
};

export default Genres;
