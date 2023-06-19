import axios from "axios";

export const searchCities = async (nameCity) => {
    try{
        const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${nameCity}`
    );

        return data;

    }catch(e){
        return e
    }
};

export const allCities = async () => {
    try{
        const {data} = await axios.get('https://restcountries.com/v3.1/all')
        return data
    }catch (error){
        return error
    }
}