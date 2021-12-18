export const getTheme = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {

        const data: string = "dark"
        if (data) {
            setTimeout(() => {
                resolve(data)
            }, 500);
        } else {
            reject("not showing solve")
        }

    })
}

export const fetchGenres = async (): Promise<any> => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49")
        const result = await response.json()
        return result.genres
    } catch (err) {
        console.log(err)
    }
}

export const fetchMovies = async (page: number): Promise<any> => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`)
        const result = await response.json()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const fetchMovie = async (id: string | undefined): Promise<any> => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`)
        const result = await response.json()
        return result
    } catch (err) {
        console.log(err)
    }
}