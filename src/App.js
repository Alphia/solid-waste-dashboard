import './App.css';
import React, {useEffect, useState} from "react";
import BigScreen from "./BigScreen";
import DataContext from './DataContext';
import {sample} from "./DataSample";
import macorons from './themes/macarons';
import chalk from './themes/chalk';
import essos from './themes/essos';
import infographic from './themes/infographic';
import purplePassion from './themes/purple-passion';
import roma from './themes/roma';
import shine from './themes/shine';
import vintage from './themes/vintage';
import walden from './themes/walden';
import westeros from './themes/westeros';
import wonderland from './themes/wonderland';
import * as echarts from 'echarts';
import ThemeContext from './themes/ThemeContext';
import dataClient from "./client/dataClient";

echarts.registerTheme('macarons', macorons);
echarts.registerTheme('chalk', chalk);
echarts.registerTheme('essos', essos);
echarts.registerTheme('infographic', infographic);
echarts.registerTheme('purple-passion', purplePassion);
echarts.registerTheme('roma', roma);
echarts.registerTheme('shine', shine);
echarts.registerTheme('vintage', vintage);
echarts.registerTheme('walden', walden);
echarts.registerTheme('westeros', westeros);
echarts.registerTheme('wonderland', wonderland);

function App(props) {
    const [data, setData] = useState(sample.data);
    const [theme, setTheme] = useState('walden');
    const {_config} = props;

    const refreshData = () => dataClient.getDashboardData(_config.dataUrl)
        .then(response => {
            // use static data for showcase.
            setData(response.data);
        })
        .catch(err => {
            console.log("当前与后端服务的网络连接有误，请检查后再执行");
            console.log(err);
        });

    useEffect(() => {
        refreshData();
        let interval = setInterval(refreshData, 60000);
        return ()=>clearInterval(interval);
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <DataContext.Provider value={data}>
                <BigScreen>
                </BigScreen>
            </DataContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App