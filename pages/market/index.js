import React, { useState, useEffect, } from 'react';
import { DataView, } from 'primereact/dataview';
import { MarketService } from '../../service/MarketService';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Toolbar } from 'primereact/toolbar';
import Link from 'next/link';

const Market = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [descending, setDescending] = useState(1);
    const marketService = new MarketService();

    const categories = [
        { name: 'MarketCap', value: 'marketCapRanking' },
        { name: 'Volume', value: 'volumeRanking' },
        { name: 'ChangePct', value: 'changepctRanking' },
    ];

    useEffect(() => {
        marketService.getMarketData().then((data) => {
            setMarketData(data);
            setLoading(false);
        });
    }, []);

    const categorySelector = () => {
        return (<Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name" defaultValue={"marketCapRanking"} />
        );
    }

    const descendingToggle = () => {
        return (<InputSwitch value={descending} onChange={(e) => setDescending(e.value)} />);
    }

    const itemTemplate = (data) => {
        if (!data) {
            return;
        }

        return (
            <Link href="/security" >
            <div className="flex flex-column md:flex-row p-3 w-full" >
                <div className="flex-1 flex flex-column text-left">
                    <div className="font-bold text-xl">{data.Name}</div>
                    <div className="mb-2">{data.Code}</div>
                </div>
                <div className="flex-1 flex flex-column text-left">
                    <div className="text-xl">{data.MktCap}</div>
                    <div className="text-xl">{data.Volume}</div>
                </div>
                <div className="flex-1 flex flex-column text-left">
                    <div className="text-xl">{data.Price}</div>
                    <div className="text-xl">{data.ChangePct === null ? 0 : data.ChangePct.toFixed(2)} %</div>
                </div>
            </div>
            </Link>
        );
    };

    return (
        <div className="grid">
            <div className="col-12">
                <Toolbar left={categorySelector} right={descendingToggle}></Toolbar>
            </div>
            <div className="col-12">
                <DataView value={marketData}
                    layout={'list'} paginator rows={20}
                    itemTemplate={itemTemplate} loading={loading}
                    className="w-full"></DataView>
            </div>


        </div>
    );
};

export default Market;
