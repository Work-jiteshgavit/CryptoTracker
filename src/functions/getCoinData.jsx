import axios from "axios";


export const getCoinData = (id) => {
    if (!id) {
        console.error("Invalid coin ID provided to getCoinData.");
        return null;
    }
    const myData = axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
           return response.data;

        })
        .catch((error) => {
            console.log("ERROR>>>", error);
        });
        return myData;
};


