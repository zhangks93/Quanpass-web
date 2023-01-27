import axios from "axios";

export class MarketService {
    constructor() {
        this.host = 'http://199.247.20.57:5000';
    }

    getMarketData() {
        const endpoint = this.host + '/market/crypto/volumeRanking?desc=1';
        return axios.get(endpoint).then((response) => response.data.data);
		
    }

    getKline() {
        const endpoint = this.host + '/market/stock?secid=1.600658&interval=day';
        return axios.get(endpoint).then((response) => response.data.data);
    }
}