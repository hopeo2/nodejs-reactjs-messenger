import axios from "axios";

class LocationService {
    constructor() {}
    async getUserLocation() {
        //filter-in-iran
        // if(!this.isLocationSupported) {
        //     throw new Error('Location in this browser does not supported!')
        // }
        // const promise = new Promise((resolve, reject) => {
        //     navigator.geolocation.getCurrentPosition(position => {
        //         resolve(position.coords)
        //     }, possitionError => {
        //         reject(possitionError)
        //     })
        // })
        // return promise;
        //you-can-use-this-two-alsooo
        //https://api.ipify.org/?format=json
        //http://ip-api.com/json/"
        const response = await axios.get("http://ip-api.com/json/");
        return response.data;
    }
    // isLocationSupported() {
    //     return ('geolocation' in navigator);
    // }
}

export default LocationService;
