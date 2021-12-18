import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../Components";
import { getGenres, getMovie, getMovies } from "../../redux/app/reducer";
import { AppDispatch, RootState } from "../../redux/store";
import Card from "./Components/Card";

interface Props { }

const Detail: React.FC<Props> = (props) => {
    const { } = props;
    const params = useParams()
    const state = useSelector((state: RootState) => state.app.movie);
    const dispatch: AppDispatch = useDispatch();

    const appDispatch = useCallback((action: any) => {
        dispatch(action);
    }, [])

    useEffect(() => {
        appDispatch(getMovie(params.id))
    }, [])





    return (
        <Wrapper>
            <div className="w-full h-full p-4 flex overflow-hidden">
                <div className="w-4/12 h-full">
                    <img className="w-full h-full object-center object-contain" src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`} />
                </div>
                <div className="w-8/12 h-full p-4">
                    {state.genres && state.genres.map((item: any) => <span className="p-2 border-2">{item.name}</span>)}
                    <h4 className="py-4 text-2xl">{state.original_title}</h4>
                    <h5>{state.overview}</h5>
                    <table className="w-full text-center my-10">
                        <tr>
                            <td className="border-2">Release Date</td>
                            <td className="border-2">Status</td>
                            <td className="border-2">Popularity</td>
                        </tr>
                        <tr>
                            <td className="border-2">{state.release_date}</td>
                            <td className="border-2">{state.status}</td>
                            <td className="border-2">{state.popularity}</td>
                        </tr>
                    </table>
                    <h5>Production Company</h5>
                    <div className="py-2 pb-6">
                        {state.production_companies && state.production_companies.map((item: any) => <span className="p-2 border-2">{item.name}</span>)}
                    </div>
                    <a className={`p-2 shadow-lg bg-yellow-400 rounded-lg`} href={state.homepage} target="_blank">Homepage</a>

                </div>
            </div>
        </Wrapper>
    );
};

export default Detail;
