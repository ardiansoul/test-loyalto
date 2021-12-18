import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../Components";
import { getGenres, getMovies } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";
import Card from "./Components/Card";

interface Props { }

const Movies: React.FC<Props> = (props) => {
    const { } = props;
    const state = useSelector((state: RootState) => state.app);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback((action: any) => {
        dispatch(action);
    }, [])

    useEffect(() => {
        appDispatch(getMovies(state.movies.page))
    }, [])

    const pagination = (type: string) => {
        if (type === "next") {
            if (state.movies.page < state.movies.total_pages) {
                appDispatch(getMovies(state.movies.page + 1))
            }
        } else if (type === "prev") {
            if (state.movies.page > 1) {
                appDispatch(getMovies(state.movies.page - 1))
            }

        }
    }



    return (
        <Wrapper>
            <div className="w-full h-full p-4 flex flex-col overflow-hidden">
                <div className="w-full h-full p-4 flex flex-wrap overflow-y-scroll">
                    {
                        state.movies.results.map((item) => <Card item={item} />)
                    }
                </div>
                <div className="w-full h-10 flex p-6 justify-end items-center">
                    <button className="w-10 h-10 shadow-lg border" onClick={() => pagination("prev")}>
                        <span>-</span>
                    </button>
                    <span className="w-10 h-10 flex justify-center items-center border">{state.movies.page}</span>

                    <button className="w-10 h-10 shadow-lg border" onClick={() => pagination("next")}>
                        <span>+</span>
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

export default Movies;
