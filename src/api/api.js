
//https://backend.daviva.lt/API/InformacijaTestui
 import axios from "axios";

export const carsAPI = {
    getCars() {
        return axios.get(`https://backend.daviva.lt/API/InformacijaTestui`)
            .then(response => {
                // console.log(response)

                return response;
            });
    }
}



