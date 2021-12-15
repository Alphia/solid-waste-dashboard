import './App.css';
import React, {useState} from "react";
import style from "styled-components"
import BigScreen from "./BigScreen";
import DataContext from './DataContext';
import {sample} from "./DataSample";


function App(props) {

    const [data, setData] = useState(sample.data);

    return (
        <DataContext.Provider value={data}>
            <div className="App">
                <BigScreen>

                </BigScreen>
            </div>
        </DataContext.Provider>
    );
}

export default style(App)`
    width: 80px;
    height: 100px;
`