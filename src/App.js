import './App.css';
import React, {useState} from "react";
import BigScreen from "./BigScreen";
import DataContext from './DataContext';
import {sample} from "./DataSample";
import macorons from './themes/macarons';
import chalk from './themes/chalk';
import * as echarts from 'echarts';
import ThemeContext from './themes/ThemeContext';

echarts.registerTheme('macarons', macorons);
echarts.registerTheme('chalk', chalk);

function App(props) {
    const [data, setData] = useState(sample.data);
    const [theme, setTheme] = useState('chalk');

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