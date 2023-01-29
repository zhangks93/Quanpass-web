import React, { useState, useEffect } from 'react';
import { Kline } from '../../demo/components/Kline';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MarketService } from '../../service/MarketService';

const Security = () => {
    const [data, setData] = useState([]);
    const marketService = new MarketService();
    const id = new URL(window.location.href).searchParams.get('code');
    const breadcrumbHome = { icon: 'pi pi-home', to: '/' };
    const breadcrumbItems = [{ label: 'Crypto' }, { label: 'Market' }, { label: id }];


    useEffect(() => {
        marketService.getKline().then((data) => {
            data.forEach(element => {
                element['time'] = element['datetime'];
            });
            setData(data);
        })
    })

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <BreadCrumb home={breadcrumbHome} model={breadcrumbItems} />
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <Kline data={data} />
                </div>
            </div>
        </div>
    );
};

export default Security;
