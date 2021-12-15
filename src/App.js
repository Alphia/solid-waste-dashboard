import './App.css';
import React, {useState} from "react";
import BigScreen from "./BigScreen";
import DataContext from './DataContext';
import {sample} from "./DataSample";


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