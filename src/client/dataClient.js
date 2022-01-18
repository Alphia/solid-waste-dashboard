import axios from 'axios';

const dashboardClient = {
    getDashboardData: (dataUrl) => {
        return axios.get(dataUrl)
    }
};

export default dashboardClient