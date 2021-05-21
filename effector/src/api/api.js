
export const fetchSomeData = async () => {
    return new Promise(resolve => setTimeout(resolve, 2000, "Fetched Data"));
}
