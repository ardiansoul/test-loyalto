export const getTheme = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {

        const data: string = "dark"
        if (data) {
            setTimeout(() => {
                resolve(data)
            }, 500);
            }else {
                reject("not showing solve")
            }

    })
}