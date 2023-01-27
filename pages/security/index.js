import React, { useState, useEffect, } from 'react';
import { MarketService } from '../../service/MarketService';

const Security = () => {
    const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(300);
    const [data, setData] = useState([]);
    const marketService = new MarketService();

    useEffect(() => {
        marketService.getKline().then((data) => {
            setData(data);
            console.log(data);
        })

        
    })


    return (
        <div >
            <div id="container">
            </div>
        </div>
    );
};

export default Security;