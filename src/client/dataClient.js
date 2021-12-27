import axios from 'axios';
import config from './config.json'

const dashboardClient = {
    getDashboardData: () => {
        return axios.get(config.dataUrl)
    }
};

export default dashboardClient