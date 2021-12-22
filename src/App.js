import './App.css';
import React, {useState} from "react";
import BigScreen from "./BigScreen";
import DataContext from './DataContext';
import {sample} from "./DataSample";
import macorons from './themes/macarons';
import chalk from './themes/chalk';
import * as echarts from 'echarts';
echarts.registerTheme('macarons', macorons);
echarts.registerTheme('chalk', chalk);

function App(props) {
    const [data, setData] = useState(sample.data);

    return (
        <DataContext.Provider value={data}>
            <BigScreen>
            </BigScreen>
        </DataContext.Provider>
    );
}

export default App